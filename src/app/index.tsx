import { observer } from 'mobx-react-lite';
import { ViewModelsProvider } from 'mobx-view-model';
import { ErrorBoundary } from 'react-simple-error-boundary';

import { vmStore } from '@/shared/config';
import { Layout } from '@/widgets/layout';

import { app } from './model/app';
import { Routing } from './routing';

export const App = observer(() => {
  return (
    <ViewModelsProvider value={vmStore}>
      <ErrorBoundary
        errorComponent={({ error }) => (
          <Layout.Container>
            <Layout.Error className={'m-auto'} error={error} />
          </Layout.Container>
        )}
      >
        {app.globalError ? (
          <Layout.Container>
            <Layout.Error className={'m-auto'} error={app.globalError} />
          </Layout.Container>
        ) : app.isReady ? (
          <>
            <Routing />
          </>
        ) : (
          <Layout.Loading />
        )}
      </ErrorBoundary>
    </ViewModelsProvider>
  );
});
