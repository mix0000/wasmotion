import { observer } from 'mobx-react-lite';
import { RouteView, RouteViewGroup } from 'mobx-route/react';

import { Layout } from '@/widgets/layout';

import { app } from './model/app';

export const Routing = observer(() => {
  return (
    <RouteViewGroup layout={Layout.Container} otherwise={app.fallbackRoute}>
      {app.globalRoutes.map(({ route, loader }) => (
        <RouteView
          key={route.path}
          route={route}
          loadView={loader}
          loading={Layout.Loading}
        />
      ))}
    </RouteViewGroup>
  );
});
