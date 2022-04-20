import React, {Suspense} from 'react';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import {RelayEnvironmentProvider} from 'react-relay';
import RelayEnvironment from './utils';
import {Navigator} from './router';
import {LoadingIndicator} from './core/LoadingIndicator';
import {useTheme} from './theme';

const App = () => {
  useTheme();

  return (
    <PaperProvider theme={DefaultTheme}>
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <Suspense fallback={<LoadingIndicator />}>
          <Navigator />
        </Suspense>
      </RelayEnvironmentProvider>
    </PaperProvider>
  );
};

export default App;
