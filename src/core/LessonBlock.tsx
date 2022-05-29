import React from 'react';
import {StyleSheet, TouchableHighlight} from 'react-native';
import {Box} from './Box';
import {Text} from './Text';
import {colors, isColor, Color} from '../theme/colors';
import {spacing, spacingHeight} from '../theme/spacing';

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
    <TouchableHighlight onPress={onPress} style={styles.button}>
      <Box style={styles.container}>
        <Box backgroundColor={color} style={styles.index}>
          <Text color="white100" fontFamily="avenirBlack" variant="lg">
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
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.white100,
    height: spacingHeight[1],
  },
  container: {
    backgroundColor: colors.white100,
    flexDirection: 'row',
    height: '100%',
  },
  index: {
    alignItems: 'center',
    justifyContent: 'center',
    width: spacing[1],
  },
  body: {
    flex: 1,
    paddingHorizontal: spacing[1],
    justifyContent: 'center',
  },
});
