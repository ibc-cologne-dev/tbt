import React from 'react';
import {View, ViewStyle, StyleProp} from 'react-native';
import {spacing} from '../theme/spacing';

interface SpacerProps {
  variant: 'sm' | 'md' | 'lg';
}

export const Spacer: React.FC<SpacerProps> = ({variant}) => {
  const style = getStyle(variant);

  return <View style={style} />;
};

const getStyle = (variant: SpacerProps['variant']): StyleProp<ViewStyle> => {
  let size = 0;
  switch (variant) {
    case 'sm':
      size = spacing['0.5'];
      break;
    case 'md':
      size = spacing[1];
      break;
    case 'lg':
      size = spacing[2];
      break;
  }
  return {width: size, height: size};
};
