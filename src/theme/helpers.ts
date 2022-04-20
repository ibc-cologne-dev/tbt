import {View, StyleProp} from 'react-native';
import {Color, Margins, Paddings} from './types';
import {spacing} from './spacing';
import {colors} from './colors';

// export function extractBackgroundColor(backgroundColor: Color): StyleProp<View>;
// export function extractBackgroundColor(backgroundColor: undefined): {};
// export function extractBackgroundColor(
//   backgroundColor?: Color,
// ): {} | StyleProp<View>;
export function extractBackgroundColor(
  backgroundColor?: Color,
): {} | StyleProp<View> {
  if (!backgroundColor) {
    return {};
  }
  return {
    backgroundColor: colors[backgroundColor],
  };
}

export function extractMargin(props: unknown & Margins) {
  if (props.margin) {
    return {margin: spacing[props.margin]};
  }

  let margin: Record<string, number> = {};

  if (props.marginHorizontal) {
    margin.marginHorizontal = spacing[props.marginHorizontal];
  }

  if (props.marginVertical) {
    margin.marginVertical = spacing[props.marginVertical];
  }

  if (props.marginTop) {
    margin.marginTop = spacing[props.marginTop];
  }

  if (props.marginRight) {
    margin.marginRight = spacing[props.marginRight];
  }

  if (props.marginBottom) {
    margin.marginBottom = spacing[props.marginBottom];
  }

  if (props.marginLeft) {
    margin.marginLeft = spacing[props.marginLeft];
  }

  return margin;
}

export function extractPadding(props: unknown & Paddings) {
  if (props.padding) {
    return {padding: spacing[props.padding]};
  }

  let padding: Record<string, number> = {};

  if (props.paddingHorizontal) {
    padding.paddingHorizontal = spacing[props.paddingHorizontal];
  }

  if (props.paddingVertical) {
    padding.paddingVertical = spacing[props.paddingVertical];
  }

  if (props.paddingTop) {
    padding.paddingTop = spacing[props.paddingTop];
  }

  if (props.paddingRight) {
    padding.paddingRight = spacing[props.paddingRight];
  }

  if (props.paddingBottom) {
    padding.paddingBottom = spacing[props.paddingBottom];
  }

  if (props.paddingLeft) {
    padding.paddingLeft = spacing[props.paddingLeft];
  }

  return padding;
}
