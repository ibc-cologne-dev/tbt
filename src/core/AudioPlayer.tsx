import {Slider} from '@miblanchard/react-native-slider';
import React from 'react';
import {StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';
import TrackPlayer, {
  State,
  useProgress,
  usePlaybackState,
} from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Color, colors} from '../theme/colors';
import {spacing, spacingHeight} from '../theme/spacing';
import {Box} from './Box';
import {Text} from './Text';

interface AudioPlayerProps {
  title: string;
  subtitle?: string;
  state: State;
  backgroundColor?: Color;
  onPress?: () => void;
}

const getIconName = (state: State) => {
  switch (state) {
    case State.Playing:
      return 'pause-circle-filled';
    default:
      return 'play-circle-filled';
  }
};

const getIconController = (state: State) => {
  switch (state) {
    case State.Playing:
      return 'pause';
    default:
      return 'play-arrow';
  }
};

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  title,
  subtitle,
  state,
  backgroundColor = 'white100',
  onPress,
}) => {
  return (
    <Box style={styles.container} backgroundColor={backgroundColor}>
      <Box style={styles.trackPlay}>
        <TouchableOpacity onPress={onPress}>
          <Box>
            <Icon
              size={48}
              color={colors.lightPetrolBlue}
              name={getIconName(state)}
            />
          </Box>
        </TouchableOpacity>
      </Box>
      <Box>
        <Text variant="md" color="petrolBlue">
          {title}
        </Text>
        {subtitle && (
          <Text variant="md" color="petrolBlue">
            {subtitle}
          </Text>
        )}
      </Box>
    </Box>
  );
};

interface CurrentTrackProps {
  title: string;
  onPrevious?: () => void;
  onNext?: () => void;
  onPause?: () => void;
  onResume?: () => void;
  onPress?: (index: number) => void;
}

export const CurrentTrack: React.FC<CurrentTrackProps> = ({
  title,
  onPress,
  onNext,
  onPrevious,
}) => {
  const {duration, position} = useProgress();
  const state = usePlaybackState();

  const onSlide = (value: number | number[]) => {
    if (Array.isArray(value)) {
      TrackPlayer.seekTo(Number.parseInt(value[0].toFixed(0), 10));
    }
  };

  return (
    <Box
      style={styles.currentContainer}
      backgroundColor="lightPetrolBlue"
      paddingHorizontal={0.5}>
      <Text
        textAlign="center"
        fontFamily="avenirBlack"
        style={styles.currentTitle}>
        {title}
      </Text>

      <Box style={styles.sliderContainer}>
        <Text variant="sm1" fontFamily="avenirBlack" style={styles.currentTime}>
          {getTime(position)}
        </Text>
        <Slider
          maximumValue={duration}
          value={position}
          onSlidingComplete={onSlide}
          maximumTrackTintColor={colors.orange}
          minimumTrackTintColor={colors.white100}
          thumbTintColor={colors.white100}
          containerStyle={styles.slider}
          thumbTouchSize={{width: 8, height: 8}}
        />
        <Text variant="sm1" fontFamily="avenirBlack" style={styles.currentTime}>
          {getTime(duration)}
        </Text>
      </Box>

      <Box style={styles.controlsContainer}>
        <TouchableHighlight
          underlayColor={colors.white100}
          onPress={() => onPrevious?.()}
          style={styles.previousButton}>
          <Icon size={28} color={colors.lightPetrolBlue} name="skip-previous" />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={colors.lightPetrolBlue}
          onPress={async () => {
            const currentTrack = await TrackPlayer.getCurrentTrack();
            onPress?.(currentTrack);
          }}
          style={styles.playResumeButton}>
          <Box style={styles.currentPlayResumeMask}>
            <Icon
              size={24}
              color={colors.orange}
              name={getIconController(state)}
            />
          </Box>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={colors.white100}
          onPress={() => onNext?.()}
          style={styles.nextButton}>
          <Icon size={28} color={colors.lightPetrolBlue} name="skip-next" />
        </TouchableHighlight>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: spacingHeight[1],
  },
  trackPlay: {
    alignItems: 'center',
    justifyContent: 'center',
    width: spacing[2],
  },
  currentContainer: {
    alignSelf: 'flex-end',
    height: spacingHeight[0.5] + spacingHeight[1] - 12,
    width: '100%',
  },
  currentTitle: {
    marginTop: 4,
  },
  currentTime: {
    letterSpacing: -0.9,
  },
  controlsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -4,
  },
  playResumeButton: {
    backgroundColor: colors.lightPetrolBlue,
    borderRadius: 50,
    overflow: 'hidden',
    padding: 4,
    zIndex: 2,
  },
  currentPlayResumeMask: {
    alignItems: 'center',
    backgroundColor: colors.white100,
    borderRadius: 50,
    justifyContent: 'center',
    height: 36,
    width: 36,
  },
  previousButton: {
    backgroundColor: colors.white100,
    justifyContent: 'center',
    paddingHorizontal: 4,
    marginRight: -6,
  },
  nextButton: {
    backgroundColor: colors.white100,
    justifyContent: 'center',
    paddingHorizontal: 4,
    marginLeft: -6,
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  slider: {
    flex: 1,
    marginHorizontal: 8,
  },
});

const getTime = (s: number): string => {
  const seconds = (s % 60).toFixed(0);
  const minutes = Number(Math.floor(s / 60)).toFixed(0);

  return `${minutes}:${seconds.length < 2 ? '0' + seconds : seconds}`;
};
