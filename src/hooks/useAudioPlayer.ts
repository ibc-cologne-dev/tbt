import {useCallback, useEffect, useState} from 'react';
import TrackPlayer, {
  State,
  Track,
  useTrackPlayerEvents,
  Event,
} from 'react-native-track-player';

const events = [Event.PlaybackState, Event.PlaybackError];

export const useAudioPlayer = (tracks: Track[]) => {
  const [currentTrack, setCurrentTrack] = useState<number | undefined>();
  const [status, setStatus] = useState<State>(State.Connecting);

  useTrackPlayerEvents(events, async ({type, state}) => {
    if (type === Event.PlaybackError) {
      console.warn('An error occured while playing the current track.');
    }
    if (
      type === Event.PlaybackState &&
      (state === State.Playing ||
        state === State.Paused ||
        state === State.Stopped)
    ) {
      const track = await TrackPlayer.getCurrentTrack();
      setCurrentTrack(track);
      state !== status && setStatus(state);
    }
  });

  useEffect(() => {
    if (tracks) {
      const startPlayer = async () => {
        const currentTracks = await TrackPlayer.getQueue();
        if (currentTracks.length === 0) {
          await TrackPlayer.add(tracks);
        }
      };
      startPlayer();
    }
  }, [tracks]);

  const playTrack = useCallback(
    (index: number) => {
      if (index < 0 || index >= tracks.length) {
        console.warn('Invalid track selected');
        return;
      }

      const play = async () => {
        const state = await TrackPlayer.getState();

        const playAnotherTrack = async () => {
          await TrackPlayer.skip(index);
          await TrackPlayer.play();
          setCurrentTrack(index);
          status !== State.Playing && setStatus(State.Playing);
        };

        if (state === State.Playing) {
          if (index !== currentTrack) {
            await playAnotherTrack();
          } else {
            await TrackPlayer.pause();
            setStatus(State.Paused);
          }
        } else {
          await playAnotherTrack();
        }
      };
      play();
    },
    [tracks.length, status, currentTrack],
  );

  return {playTrack, currentTrack, status};
};
