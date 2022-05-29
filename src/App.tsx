import React, {Suspense} from 'react';
import {RelayEnvironmentProvider} from 'react-relay';
import RelayEnvironment from './utils';
import {Navigator} from './router';
import {LoadingIndicator} from './core/LoadingIndicator';
import {useTheme} from './theme';
import {FilesContextProvider} from './contexts/files';

const App = () => {
  useTheme();

  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={<LoadingIndicator />}>
        <FilesContextProvider>
          <Navigator />
        </FilesContextProvider>
      </Suspense>
    </RelayEnvironmentProvider>
  );
};

export default App;
