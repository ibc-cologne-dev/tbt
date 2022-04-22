import React from 'react';
import {Svg, Path, G} from 'react-native-svg';

export const BackIcon: React.FC = () => {
  return (
    <Svg width={8} height={16} viewBox="0 0 10 18">
      <G transform="matrix(0.3448276 0 0 0.3448276 -0 0.3793105)">
        <Path
          d="M25.64 46.71L3.54004 24.61L25.64 2.5"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="square"
        />
      </G>
    </Svg>
  );
};
