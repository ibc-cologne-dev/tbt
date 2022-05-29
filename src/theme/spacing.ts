import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

let widthSpace = Math.floor(width / 9);
let heightSpace = Math.floor(height / 9);

while (heightSpace % 4 !== 0) {
  heightSpace++;
}
while (widthSpace % 4 !== 0) {
  widthSpace++;
}

export const spacing = {
  0.5: Math.floor(widthSpace / 2),
  1: widthSpace,
  2: widthSpace * 2,
  4: widthSpace * 4,
  6: widthSpace * 6,
  8: widthSpace * 8,
};

export const spacingHeight = {
  0.5: Math.floor(heightSpace / 2),
  1: heightSpace,
  2: heightSpace * 2,
  4: heightSpace * 4,
  6: heightSpace * 6,
  8: heightSpace * 8,
};
