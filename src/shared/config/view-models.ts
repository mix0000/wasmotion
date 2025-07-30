import { viewModelsConfig, ViewModelStoreBase } from 'mobx-view-model';
import { loadableDefaultConfig } from 'react-simple-loadable';

viewModelsConfig.comparePayload = false;
viewModelsConfig.payloadComputed = 'struct';
viewModelsConfig.payloadObservable = 'ref';
viewModelsConfig.wrapViewsInObserver = true;

loadableDefaultConfig.throwOnError = true;

export const vmStore = new ViewModelStoreBase();

if (buildEnvs.isDev) {
  // eslint-disable-next-line no-console
  console.debug('[debug] ViewModelsStore', vmStore);
}
