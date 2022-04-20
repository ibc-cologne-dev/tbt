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
  fontWeight?: TextStyle['fontWeight'];
  textAlign?: TextStyle['textAlign'];
  variant?: Variant;
}

export const Text: React.FC<TextProps> = ({
  fontFamily = 'avenir',
  fontWeight = 'normal',
  variant = 'md',
  color = 'white100',
  textAlign = 'left',
  style,
  ...props
}) => {
  const fontFamilyStyle = extractFontFamily(fontFamily);
  const fontSizeStyle = extractFontSize(variant);
  const fontColorStyle = extractFontColor(color);

  return (
    <RNText
      style={[
        style,
        fontFamilyStyle,
        fontSizeStyle,
        fontColorStyle,
        {fontWeight, textAlign},
      ]}
      {...props}
    />
  );
};
