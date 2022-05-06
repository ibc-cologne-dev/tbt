import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {colors} from '../theme/colors';

export const LoadingIndicator: React.FC = ({children}) => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator color={colors.petrolBlue} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
