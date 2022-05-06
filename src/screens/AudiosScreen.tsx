import React from 'react';
import {useFilesContext} from '../contexts/files';
import {BaseScreenWrapper} from '../core/BaseScreenWrapper';
import {Box} from '../core/Box';
import {AudioPlayer} from '../core/AudioPlayer';
import {useAudioPlayer} from '../hooks/useAudioPlayer';
import {State} from 'react-native-track-player';
import {LoadingIndicator} from '../core/LoadingIndicator';
import {Text} from '../core/Text';

export const AudiosScreen: React.FC = () => {
  const {audios, isLoading} = useFilesContext();
  const {currentTrack, playTrack, status} = useAudioPlayer(audios);

  return (
    <BaseScreenWrapper>
      {isLoading && (
        <>
          <LoadingIndicator>
            <Text color="petrolBlue" textAlign="center">
              Loading songs...
            </Text>
          </LoadingIndicator>
        </>
      )}
      <Box>
        {audios.map((track, index) => {
          return (
            <AudioPlayer
              key={`audio_${index}`}
              title={track.title}
              state={
                currentTrack === index && status === State.Playing
                  ? 'playing'
                  : 'stopped'
              }
              onPress={() => playTrack(index)}
            />
          );
        })}
      </Box>
    </BaseScreenWrapper>
  );
};
