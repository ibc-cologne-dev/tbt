import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Box} from './Box';
import {Text} from './Text';
import {colors, isColor, Color} from '../theme/colors';
import {spacing} from '../theme/spacing';

interface LessonBlockProps {
  index?: number | null;
  indexColor?: string | null;
  headline?: string | null;
  subline?: string | null;
  onPress?: () => void;
  isEven?: boolean;
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
          <Text color="white100" fontWeight="bold" variant="lg">
            {index ?? ' '}
          </Text>
        </Box>
        <Box
          backgroundColor={isEven ? 'white100' : 'white50'}
          style={styles.body}>
          <Text color="petrolBlue">{headline ?? ''}</Text>
          <Text color="petrolBlue">{subline}</Text>
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
    justifyContent: 'center',
    width: spacing[4],
  },
  body: {
    flex: 1,
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[4],
  },
});
