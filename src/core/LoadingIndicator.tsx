import React from 'react';
import {StyleSheet} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {colors} from '../theme/colors';
import {Box} from './Box';

export const LoadingIndicator: React.FC = ({children}) => {
  return (
    <Box style={styles.wrapper} backgroundColor="white100">
      <ActivityIndicator color={colors.petrolBlue} />
      {children}
    </Box>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
