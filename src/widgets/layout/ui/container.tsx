import { ViewModelProps, withViewModel } from 'mobx-view-model';
import { ReactNode } from 'react';

import { LayoutVM } from '../model';

import { Header } from './header';

export interface ContainerProps extends ViewModelProps<LayoutVM> {
  children?: ReactNode;
}

export const Container = withViewModel(LayoutVM)(({
  children,
}: ContainerProps) => {
  return (
    <div
      className={
        'layout relative mx-auto flex min-h-screen max-w-[1864px] flex-1 flex-col p-2'
      }
    >
      <Header />
      {children}
    </div>
  );
});
