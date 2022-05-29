import {useCallback, useEffect, useState} from 'react';
import TrackPlayer, {
  State,
  Track,
  useTrackPlayerEvents,
  Event,
} from 'react-native-track-player';
import storage from '@react-native-firebase/storage';
import {AudiosScreensQuery$data} from '../__generated__/AudiosScreensQuery.graphql';

const events = [Event.PlaybackState, Event.PlaybackError];

export const useAudioPlayer = (data?: AudiosScreensQuery$data) => {
  const [currentTrack, setCurrentTrack] = useState<
    {index: number; title: string} | undefined
  >();
  const [status, setStatus] = useState<State>(State.Connecting);

  const tracks: Track[] | undefined = data?.audios?.map(audio => ({
    url: '',
    title: audio?.title ?? '',
    duration: audio?.audio_duration ?? 0,
    artist: audio?.artist ?? '',
    artwork: 'https://i.imgur.com/CxVoe1a_d.webp?maxwidth=760&fidelity=grand',
  }));

  useTrackPlayerEvents(events, async event => {
    if (event.type === Event.PlaybackError) {
      console.warn('An error occured while playing the current track.', event);
    }
    if (
      event.type === Event.PlaybackState &&
      (event.state === State.Playing ||
        event.state === State.Paused ||
        event.state === State.Stopped ||
        event.state === State.Buffering)
    ) {
      const index = await TrackPlayer.getCurrentTrack();
      setCurrentTrack({index, title: tracks![index].title ?? ''});
      event.state !== status && setStatus(event.state);
    }
  });

  useEffect(() => {
    if (data?.audios) {
      const startPlayer = async () => {
        let promises = [];
        for (let audio of data.audios) {
          promises.push(
            storage()
              .ref(audio?.file as string)
              .getDownloadURL(),
          );
        }
        const urls = await Promise.all(promises);

        const tracksWithUrl = tracks?.map((track, index) => ({
          ...track,
          url: urls[index],
        }));

        const currentTracks = await TrackPlayer.getQueue();
        if (currentTracks.length === 0 && tracksWithUrl) {
          await TrackPlayer.add(tracksWithUrl);
        }
      };
      startPlayer();
    }
  }, [data, tracks]);

  const playTrack = useCallback(
    (index: number) => {
      const play = async () => {
        const state = await TrackPlayer.getState();

        const playAnotherTrack = async () => {
          await TrackPlayer.skip(index);
          await TrackPlayer.play();
        };

        if (state === State.Playing) {
          if (index !== currentTrack?.index) {
            await playAnotherTrack();
          } else {
            await TrackPlayer.pause();
            setStatus(State.Paused);
          }
        } else {
          if (index !== currentTrack?.index) {
            await playAnotherTrack();
          } else {
            await TrackPlayer.play();
          }
        }
      };
      play();
    },
    [currentTrack],
  );

  const skipToNext = useCallback(() => {
    TrackPlayer.skipToNext();
  }, []);

  const skipToPrevious = useCallback(() => {
    TrackPlayer.skipToPrevious();
  }, []);

  return {playTrack, currentTrack, status, skipToNext, skipToPrevious};
};
