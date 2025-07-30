import { VirtualRoute } from 'mobx-route';

import { homeRoute } from '../home';

/**
 * Роут, который открывается, когда пользователь пытается перейти на несуществующую страницу
 */
export const notFoundRoute = new VirtualRoute({
  afterOpen: () => {
    homeRoute.open(null, { replace: true });
    notFoundRoute.close();
  },
});
