import React from 'react';
import {StyleSheet} from 'react-native';
import {Svg, Path, G} from 'react-native-svg';
import {Color, colors} from '../../theme/colors';

interface ClosingArchProps {
  color: Color;
}

export const ClosingArch: React.FC<ClosingArchProps> = ({color, ...props}) => {
  return (
    <Svg height={48} viewBox="0 0 350 48" {...props} style={style.svg}>
      <G transform="matrix(0.40000004 0 0 0.40000004 -0 0.20000002)">
        <Path
          d="M107.621 118.35L767.379 118.35C 826.718 118.35 875 70.0673 875 10.7284L875 10.7284L875 0.00333405L853.55 0.00333217L853.55 10.7284C 853.55 58.2405 814.891 96.8995 767.379 96.8995L767.379 96.8995L107.621 96.8994C 60.1092 96.8994 21.4501 58.2404 21.4501 10.7283L21.4501 10.7283L21.4501 0.00325943L1.03462E-05 0.00325755L9.40854E-06 10.7283C 4.22097E-06 70.0672 48.2823 118.35 107.621 118.35z"
          stroke="none"
          fill={colors[color]}
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
