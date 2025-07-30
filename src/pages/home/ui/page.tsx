import { withViewModel } from 'mobx-view-model';

import { HomePageVM } from '../model';

export const HomePage = withViewModel(HomePageVM, () => {
  return <div>Home</div>;
});
