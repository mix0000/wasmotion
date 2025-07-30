import { computed } from 'mobx';

import { homeRoute } from '@/pages/home';
import { notFoundRoute } from '@/pages/not-found';

/**
 * Общая модель базовой конфигурации приложения
 */
export class AppModel {
  @computed.struct
  get isReady() {
    return true;
  }

  /**
   * Глобальная ошибка которая должна блокировать дальнейшний роутинг
   * пользователя
   */
  @computed.struct
  get globalError() {
    return null;
  }

  /**
   * Роут, который используется в случае навигации
   * Когда ни один глобальный роут не открыт
   */
  fallbackRoute = notFoundRoute;

  /**
   * Список глобальных роутов
   */
  globalRoutes = [
    {
      route: homeRoute,
      loader: () => import('@/pages/home/ui/page').then((m) => m.HomePage),
    },
  ] as const;
}

export const app = new AppModel();
