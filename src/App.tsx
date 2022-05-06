import React, {Suspense} from 'react';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import {RelayEnvironmentProvider} from 'react-relay';
import RelayEnvironment from './utils';
import {Navigator} from './router';
import {LoadingIndicator} from './core/LoadingIndicator';
import {useTheme} from './theme';
import {FilesContextProvider} from './contexts/files';

const App = () => {
  useTheme();

  return (
    <PaperProvider theme={DefaultTheme}>
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <Suspense fallback={<LoadingIndicator />}>
          <FilesContextProvider>
            <Navigator />
          </FilesContextProvider>
        </Suspense>
      </RelayEnvironmentProvider>
    </PaperProvider>
  );
};

export default App;
