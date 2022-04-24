import React from 'react';
import {StyleSheet} from 'react-native';
import {Svg, Path, G} from 'react-native-svg';
import {colors} from '../../theme/colors';

export const WeekOneArch: React.FC = props => {
  return (
    <Svg height={48} viewBox="0 0 350 48" {...props} style={style.svg}>
      <G transform="matrix(0.40000004 0 0 0.40000004 0 0)">
        <Path
          d="M419.701 108.716L407.767 108.716L401.664 75.1863L401.527 75.1863L395.492 108.716L383.558 108.716L374.208 58.7354L385.654 58.7354L390.783 93.5393L391.065 93.5393L396.467 58.7354L407.348 58.7354L412.964 93.5393L413.179 93.5393L418.229 58.7354L429.11 58.7354L419.701 108.716z"
          stroke="none"
          fill={colors.petrolBlue}
          fill-rule="nonzero"
        />
        <Path
          d="M454.909 108.716L444.31 85.4903L444.096 85.4903L444.096 108.716L432.796 108.716L432.796 58.7354L444.096 58.7354L444.096 79.5589L444.31 79.5589L454.558 58.7354L467.126 58.7354L454.353 81.6079L467.906 108.716L454.909 108.716z"
          stroke="none"
          fill={colors.petrolBlue}
          fill-rule="nonzero"
        />
        <Path
          d="M480.22 108.716L480.22 71.8628L472.781 77.5099L467.798 68.755L481.419 58.7354L491.247 58.7354L491.247 108.716L480.22 108.716z"
          stroke="none"
          fill={colors.petrolBlue}
          fill-rule="nonzero"
        />
        <Path
          d="M875 119.5L853.55 119.5L853.55 108.716C 853.55 60.9412 814.891 22.0686 767.379 22.0686L767.379 22.0686L107.621 22.0686C 60.1091 22.0686 21.4501 60.9412 21.4501 108.716L21.4501 108.716L21.4501 119.5L0 119.5L0 108.716C 0 49.049 48.2823 0.5 107.621 0.5L107.621 0.5L767.379 0.5C 826.718 0.5 875 49.049 875 108.716L875 108.716L875 119.5z"
          stroke="none"
          fill={colors.petrolBlue}
          fill-rule="nonzero"
        />
      </G>
    </Svg>
  );
};

const style = StyleSheet.create({
  svg: {
    width: '100%',
  },
});
