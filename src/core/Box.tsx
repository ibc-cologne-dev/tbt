import React from 'react';
import {View, ViewProps} from 'react-native';
import {
  extractBackgroundColor,
  extractMargin,
  extractPadding,
} from '../theme/helpers';
import {Margins, Paddings, BoxColors} from '../theme/types';

type BoxProps = ViewProps & Margins & Paddings & Partial<BoxColors>;

export const Box: React.FC<BoxProps> = ({style, backgroundColor, ...rest}) => {
  const backgroundStyle = extractBackgroundColor(backgroundColor);
  const marginStyle = extractMargin(rest);
  const paddingStyle = extractPadding(rest);

  return (
    <View
      {...rest}
      style={[style, backgroundStyle, marginStyle, paddingStyle]}
    />
  );
};
