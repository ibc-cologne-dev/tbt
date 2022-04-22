import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';
import {Color} from '../theme/colors';
import {
  extractFontColor,
  extractFontFamily,
  extractFontSize,
} from '../theme/helpers';
import {Font, Variant} from '../theme/typography';

interface TextProps extends RNTextProps {
  color?: Color;
  fontFamily?: Font;
  textAlign?: TextStyle['textAlign'];
  variant?: Variant;
}

export const Text: React.FC<TextProps> = ({
  fontFamily = 'avenir',
  variant = 'md',
  color = 'white100',
  textAlign = 'left',
  style,
  ...props
}) => {
  const fontFamilyStyle = extractFontFamily(fontFamily, variant);
  const fontSizeStyle = extractFontSize(variant);
  const fontColorStyle = extractFontColor(color);

  return (
    <RNText
      style={[
        style,
        fontFamilyStyle,
        fontSizeStyle,
        fontColorStyle,
        {textAlign},
      ]}
      {...props}
    />
  );
};
