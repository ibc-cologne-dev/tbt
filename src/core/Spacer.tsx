import React from 'react';
import {View, ViewStyle, StyleProp} from 'react-native';

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
      size = 8;
      break;
    case 'md':
      size = 16;
      break;
    case 'lg':
      size = 32;
      break;
  }
  return {width: size, height: size};
};
