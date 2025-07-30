import { observer } from 'mobx-react-lite';
import { ReactNode } from 'react';
import { cx } from 'yummies/css';

export interface ContentProps {
  header?: ReactNode;
  subheader?: ReactNode;
  loading?: boolean;
  icon?: ReactNode;
  description?: ReactNode;
  className?: string;
  children?: ReactNode;
  rightSlot?: ReactNode;
}

export const Content = observer(
  ({
    header,
    subheader,
    rightSlot,
    icon,
    className,
    description,
    children,
  }: ContentProps) => {
    return (
      <div className={cx('px-6 py-8 flex flex-col relative flex-1', className)}>
        {!!(header || description) && (
          <div className={'flex flex-row gap-4'}>
            {icon}
            <div className={'mb-3 flex w-full flex-col gap-3'}>
              {header && (
                <div
                  className={
                    'flex w-full flex-row flex-wrap items-center justify-between'
                  }
                >
                  <h2 className={'flex'}>{header}</h2>
                  {rightSlot}
                </div>
              )}
              {subheader}
              {description}
            </div>
          </div>
        )}
        {children}
      </div>
    );
  },
);
