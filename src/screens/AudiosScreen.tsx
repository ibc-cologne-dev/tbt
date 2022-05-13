import React from 'react';
import {BaseScreenWrapper} from '../core/BaseScreenWrapper';
import {Box} from '../core/Box';
import {AudioPlayer} from '../core/AudioPlayer';
import {useAudioPlayer} from '../hooks/useAudioPlayer';
import {State} from 'react-native-track-player';
import {graphql, useLazyLoadQuery} from 'react-relay';
import {AudiosScreensQuery} from '../__generated__/AudiosScreensQuery.graphql';

const audiosQuery = graphql`
  query AudiosScreensQuery {
    audios @required(action: NONE) {
      title @required(action: NONE)
      file @required(action: NONE)
      artist @required(action: NONE)
      audio_duration @required(action: NONE)
    }
  }
`;

export const AudiosScreen: React.FC = () => {
  const data = useLazyLoadQuery<AudiosScreensQuery>(audiosQuery, {});
  const {currentTrack, playTrack, status} = useAudioPlayer(data);

  if (!data?.audios) {
    return null;
  }

  return (
    <BaseScreenWrapper>
      <Box>
        {data.audios.map((track, index) => {
          return (
            <AudioPlayer
              key={`audio_${index}`}
              title={track?.title ?? ''}
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
