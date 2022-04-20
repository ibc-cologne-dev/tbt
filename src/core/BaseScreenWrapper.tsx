import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {useTheme} from '../theme';

export const BaseScreenWrapper: React.FC = ({children}) => {
  const {colors} = useTheme();

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={colors.petrolBlue} />
      {children}
    </SafeAreaView>
  );
};
