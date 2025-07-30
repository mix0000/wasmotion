import { observer } from 'mobx-react-lite';
import { Link } from 'mobx-route/react';
import { useViewModel } from 'mobx-view-model';

import { LayoutVM } from '../../model';

export const Header = observer(() => {
  const model = useViewModel(LayoutVM);

  return (
    <div
      className={
        'rounded-2 bg-g-base-float-accent shadow-card-shadow/card-light sticky top-2 z-1 flex h-13 flex-none flex-row items-center px-6'
      }
    >
      <Link
        to={model.homeUrl}
        className={'my-auto flex flex-row items-center gap-2'}
      >
        <h1>{model.projectName}</h1>
      </Link>
    </div>
  );
});
