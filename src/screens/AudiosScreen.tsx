import React from 'react';
import {BaseScreenWrapper} from '../core/BaseScreenWrapper';
import {Box} from '../core/Box';
import {AudioPlayer} from '../core/AudioPlayer';
import {useAudioPlayer} from '../hooks/useAudioPlayer';

var track = {
  url: 'audios/every_creeping_thing.aac',
  title: 'Every Creeping Thing',
  artist: 'IBC Cologne',
  genre: 'Gospel',
  date: '2022-05-02T07:00:00+00:00',
  duration: 224,
  artwork: 'https://i.imgur.com/CxVoe1a_d.webp?maxwidth=760&fidelity=grand',
};

var track2 = {
  url: 'audios/you_must_rule_over_it.aac',
  title: 'You Must Rule Over It',
  artist: 'IBC Cologne',
  genre: 'Gospel',
  date: '2022-05-02T07:00:00+00:00',
  duration: 116,
  artwork: 'https://i.imgur.com/CxVoe1a_d.webp?maxwidth=760&fidelity=grand',
};

export const AudiosScreen: React.FC = () => {
  const {isLoading, currentTrack, playTrack, status} = useAudioPlayer([
    track,
    track2,
  ]);

  if (isLoading) {
    return null;
  }

  return (
    <BaseScreenWrapper>
      <Box>
        <AudioPlayer
          title="Every Creeping Thing"
          state={
            currentTrack === 0 && status === 'playing' ? 'playing' : 'stopped'
          }
          onPress={() => playTrack(0)}
        />

        <AudioPlayer
          title="You Must Rule Over It"
          state={
            currentTrack === 1 && status === 'playing' ? 'playing' : 'stopped'
          }
          onPress={() => playTrack(1)}
        />
      </Box>
    </BaseScreenWrapper>
  );
};
