import React from 'react';
import {BaseScreenWrapper} from '../core/BaseScreenWrapper';
import {Box} from '../core/Box';
import {AudioPlayer, CurrentTrack} from '../core/AudioPlayer';
import {useAudioPlayer} from '../hooks/useAudioPlayer';
import {State} from 'react-native-track-player';
import {graphql, useLazyLoadQuery} from 'react-relay';
import {AudiosScreensQuery} from '../__generated__/AudiosScreensQuery.graphql';
import {FlatList, StyleSheet} from 'react-native';

const audiosQuery = graphql`
  query AudiosScreensQuery {
    audios @required(action: NONE) {
      title @required(action: NONE)
      subtitle @required(action: NONE)
      file @required(action: NONE)
      artist @required(action: NONE)
      audio_duration @required(action: NONE)
    }
  }
`;

export const AudiosScreen: React.FC = () => {
  const data = useLazyLoadQuery<AudiosScreensQuery>(audiosQuery, {});
  const {currentTrack, playTrack, status, skipToNext, skipToPrevious} =
    useAudioPlayer(data);

  if (!data?.audios) {
    return null;
  }

  return (
    <BaseScreenWrapper>
      <Box backgroundColor="white100" style={styles.container}>
        <FlatList
          data={data.audios}
          keyExtractor={(_, index) => `trackItem_${index}`}
          renderItem={({item, index}) => {
            console.log(item);
            return (
              <AudioPlayer
                key={`audio_${index}`}
                title={item?.title ?? ''}
                subtitle={item?.subtitle ?? ''}
                backgroundColor={index % 2 === 0 ? 'white100' : 'white50'}
                state={
                  currentTrack?.index === index && status === State.Playing
                    ? State.Playing
                    : State.Stopped
                }
                onPress={() => playTrack(index)}
              />
            );
          }}
        />
        <CurrentTrack
          title={currentTrack?.title ?? ''}
          onPress={playTrack}
          onNext={skipToNext}
          onPrevious={skipToPrevious}
        />
      </Box>
    </BaseScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
