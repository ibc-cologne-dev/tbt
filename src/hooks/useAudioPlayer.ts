import {useCallback, useEffect, useState} from 'react';
import TrackPlayer, {State, Track} from 'react-native-track-player';
import storage from '@react-native-firebase/storage';

export const useAudioPlayer = (tracks: Track[]) => {
  const [isLoading, setLoading] = useState(true);
  const [currentTrack, setCurrentTrack] = useState<number | undefined>();
  const [status, setStatus] = useState<'stopped' | 'playing' | 'paused'>(
    'stopped',
  );

  useEffect(() => {
    if (!tracks) {
      return;
    }

    const getAudio = async () => {
      let promises = [];
      for (let track of tracks) {
        promises.push(
          storage()
            .ref(track.url as string)
            .getDownloadURL(),
        );
      }
      const firebasePaths = await Promise.all(promises);
      const tracksWithFirebasePath = tracks.map((track, index) => ({
        ...track,
        url: firebasePaths[index],
      }));

      await TrackPlayer.add(tracksWithFirebasePath);
      setLoading(false);
    };
    getAudio();
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
          status !== 'playing' && setStatus('playing');
        };

        if (state === State.Playing) {
          if (index !== currentTrack) {
            await playAnotherTrack();
          } else {
            await TrackPlayer.pause();
            setStatus('paused');
          }
        } else {
          await playAnotherTrack();
        }
      };
      play();
    },
    [tracks.length, status, currentTrack],
  );

  return {playTrack, currentTrack, isLoading, status};
};
