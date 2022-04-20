import {spacing} from './spacing';
import {Color} from './colors';

export type Spacing = keyof typeof spacing;

export interface Margins {
  margin?: Spacing;
  marginLeft?: Spacing;
  marginRight?: Spacing;
  marginBottom?: Spacing;
  marginTop?: Spacing;
  marginHorizontal?: Spacing;
  marginVertical?: Spacing;
}

export interface Paddings {
  padding?: Spacing;
  paddingLeft?: Spacing;
  paddingRight?: Spacing;
  paddingBottom?: Spacing;
  paddingTop?: Spacing;
  paddingHorizontal?: Spacing;
  paddingVertical?: Spacing;
}

export interface BoxColors {
  backgroundColor: Color;
}
