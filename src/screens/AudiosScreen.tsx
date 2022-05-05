import React from 'react';
import {BaseScreenWrapper} from '../core/BaseScreenWrapper';
import {Box} from '../core/Box';
import {AudioPlayer} from '../core/AudioPlayer';
import {useAudioPlayer} from '../hooks/useAudioPlayer';
import {State} from 'react-native-track-player';
import {graphql, useLazyLoadQuery} from 'react-relay';
import {AudiosScreenQuery} from '../__generated__/AudiosScreenQuery.graphql';

// var track = {
//   url: 'audios/every_creeping_thing.aac',
//   title: 'Every Creeping Thing',
//   artist: 'IBC Cologne',
//   duration: 224,
//   artwork: 'https://i.imgur.com/CxVoe1a_d.webp?maxwidth=760&fidelity=grand',
// };

// var track2 = {
//   url: 'audios/you_must_rule_over_it.aac',
//   title: 'You Must Rule Over It',
//   artist: 'IBC Cologne',
//   duration: 116,
//   artwork: 'https://i.imgur.com/CxVoe1a_d.webp?maxwidth=760&fidelity=grand',
// };

const AudioQuery = graphql`
  query AudiosScreenQuery {
    audios @required(action: NONE) {
      title @required(action: NONE)
      file @required(action: NONE)
      artist @required(action: NONE)
      audio_duration @required(action: NONE)
    }
  }
`;

export const AudiosScreen: React.FC = () => {
  const data = useLazyLoadQuery<AudiosScreenQuery>(AudioQuery, {});
  const tracks = data?.audios.map(audio => ({
    url: audio?.file ?? '',
    title: audio?.title ?? '',
    duration: audio?.audio_duration ?? 0,
    artwork: 'https://i.imgur.com/CxVoe1a_d.webp?maxwidth=760&fidelity=grand',
  }));
  const {isLoading, currentTrack, playTrack, status} = useAudioPlayer(
    tracks ?? [],
  );

  if (isLoading || !data || !tracks) {
    return null;
  }

  return (
    <BaseScreenWrapper>
      <Box>
        {tracks.map((track, index) => {
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
