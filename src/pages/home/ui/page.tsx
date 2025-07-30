import { withViewModel } from 'mobx-view-model';
import { ReactNode } from 'react';

import FileEarMarkZip from '@/shared/icons/file-earmark-zip.svg?react';
import FileTypeGif from '@/shared/icons/filetype-gif.svg?react';
import FileTypeMp3 from '@/shared/icons/filetype-mp3.svg?react';
import InfoSquare from '@/shared/icons/info-square.svg?react';

import { HomePageVM } from '../model';

interface DashboardElement {
  description?: string;
  icon: ReactNode;
  route: string;
  title: string;
  disabled?: boolean;
}

const dashboardElements: DashboardElement[] = [
  {
    description: 'Convert any video formats to GIF',
    title: 'Video to GIF',
    route: '/videoToGif',
    icon: <FileTypeGif className={'size-9'} />,
  },
  {
    description: 'Get detailed information about your video',
    title: 'Info',
    route: '/info',
    icon: <InfoSquare className={'size-9'} />,
  },
  {
    description:
      'Take large video files and compress them to a smaller file size',
    title: 'Compressor',
    route: '/compressVideo',
    icon: <FileEarMarkZip className={'size-9'} />,
    disabled: true,
  },
  {
    description: 'Get audio track from your video with extended customization',
    title: 'Audio from video',
    route: '/getAudio',
    icon: <FileTypeMp3 className={'size-9'} />,
    disabled: true,
  },
];

const DashboardElement = (dashboardElement: DashboardElement) => {
  return (
    <div
      className={
        'group w-1/3 cursor-pointer rounded-2xl px-8 py-4 hover:bg-blue-100 hover:text-blue-900'
      }
    >
      <div
        className={
          'mb-8 flex size-[80px] items-center justify-center rounded-full bg-indigo-50 text-slate-800 group-hover:bg-blue-900 group-hover:text-white'
        }
      >
        {dashboardElement.icon}
      </div>
      <div className={'mb-2 text-3xl font-bold'}>{dashboardElement.title}</div>
      <div className={'text-sm/4'}>{dashboardElement.description}</div>
    </div>
  );
};

export const HomePage = withViewModel(HomePageVM, () => {
  return (
    <div className={'m-auto w-[800px] rounded-2xl bg-zinc-800 px-4 py-8'}>
      <div className={'flex flex-row flex-wrap '}>
        {dashboardElements.map((dashboardElementProps) => {
          return (
            <DashboardElement
              key={dashboardElementProps.title}
              {...dashboardElementProps}
            />
          );
        })}
      </div>
    </div>
  );
});
