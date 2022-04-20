import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Box} from './Box';
import {colors, isColor, Color} from '../theme/colors';
import {spacing} from '../theme/spacing';

interface LessonBlockProps {
  index?: number | null;
  indexColor?: string | null;
  headline?: string | null;
  subline?: string | null;
  onPress?: () => void;
  isEven: boolean;
}

export const LessonBlock: React.FC<LessonBlockProps> = ({
  index,
  indexColor = colors.petrolBlue,
  headline,
  subline,
  isEven,
  onPress,
}) => {
  let color: Color;
  if (isColor(indexColor!)) {
    color = indexColor;
  } else {
    color = 'petrolBlue';
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Box style={styles.container}>
        <Box backgroundColor={color} style={styles.index}>
          <Text style={styles.indexText}>{index ?? ' '}</Text>
        </Box>
        <Box
          backgroundColor={isEven ? 'white100' : 'white50'}
          style={styles.body}>
          <Text style={styles.bodyText}>{headline ?? ''}</Text>
          <Text style={styles.bodyText}>{subline}</Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  index: {
    alignItems: 'center',
    paddingVertical: spacing[2],
    width: spacing[4],
  },
  indexText: {
    color: colors.white100,
  },
  body: {
    flex: 1,
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[4],
  },
  bodyText: {
    color: colors.petrolBlue,
  },
});
