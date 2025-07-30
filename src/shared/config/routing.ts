import { createQueryParams, routeConfig } from 'mobx-route';

import { history } from './history';

export const query = createQueryParams({
  history,
});

routeConfig.update({
  history,
  queryParams: query,
  baseUrl: buildEnvs.baseUrl,
});

if (buildEnvs.isDev) {
  // eslint-disable-next-line no-console
  console.debug('[debug] QueryParams', query);
}
