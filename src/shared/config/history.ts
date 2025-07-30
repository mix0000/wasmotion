import { createBrowserHistory } from 'mobx-route';

export const history = createBrowserHistory();

if (buildEnvs.isDev) {
  // eslint-disable-next-line no-console
  console.debug('[debug] history', history);
}
