import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../theme/colors';
import {Box} from './Box';
import {Text} from './Text';

interface AudioPlayerProps {
  title: string;
  state: 'playing' | 'stopped' | 'paused';
  onPress?: () => void;
}

const getIconName = (state: AudioPlayerProps['state']) => {
  switch (state) {
    case 'playing':
      return 'pause-circle-filled';
    default:
      return 'play-circle-filled';
  }
};

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  title,
  state,
  onPress,
}) => {
  return (
    <Box style={styles.container} backgroundColor="white50" padding={2}>
      <Box>
        <TouchableOpacity onPress={onPress}>
          <Box>
            <Icon size={32} color={colors.orchid} name={getIconName(state)} />
          </Box>
        </TouchableOpacity>
      </Box>
      <Text variant="lg" color="petrolBlue" marginLeft={2}>
        {title}
      </Text>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
