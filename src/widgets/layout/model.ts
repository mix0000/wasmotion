import { ViewModelBase } from 'mobx-view-model';

import { homeRoute } from '@/pages/home';

export class LayoutVM extends ViewModelBase {
  projectName = 'WASMOTION';

  homeUrl = homeRoute.createUrl();

  handleRetry = () => {
    location.reload();
  };
}
