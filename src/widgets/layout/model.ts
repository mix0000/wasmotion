import { ViewModelBase } from 'mobx-view-model';

import { homeRoute } from '@/pages/home';

export class LayoutVM extends ViewModelBase {
  projectName = 'Wasmotion';

  homeUrl = homeRoute.createUrl();

  handleRetry = () => {
    location.reload();
  };
}
