import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {Colors} from '../theme';

interface SeparatorProps {
  style?: ViewStyle | ViewStyle[];
}

export const Separator: React.FC<SeparatorProps> = ({style}) => (
  <View style={[styles.main, style]} />
);

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.black40,
    height: 2,
    width: '100%',
  },
});
