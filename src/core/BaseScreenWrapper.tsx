import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {SafeAreaViewProps} from 'react-native-safe-area-context';
import {Color, colors} from '../theme/colors';

interface BaseScreenWrapper extends SafeAreaViewProps {
  backgroundColor?: Color;
  color?: Color;
}

export const BaseScreenWrapper: React.FC<BaseScreenWrapper> = ({
  children,
  backgroundColor = 'white100',
  color = 'petrolBlue',
  style,
  ...props
}) => {
  const backgroundStyle = {backgroundColor: colors[backgroundColor]};

  return (
    <SafeAreaView style={[styles.container, backgroundStyle, style]} {...props}>
      <StatusBar backgroundColor={colors[color]} />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
