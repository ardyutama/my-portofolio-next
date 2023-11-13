import localFont from 'next/font/local';

export const monaSans = localFont({
  src: [
    {
      path: './MonaSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './MonaSans-Medium.woff2',
      weight: '500',
      style: 'medium',
    },
    {
      path: './MonaSans-Bold.woff2',
      weight: '600',
      style: 'bold',
    },
    {
      path: './MonaSansExpanded-Bold.woff2',
      weight: '600',
      style: 'expand-bold',
    },
  ],
});
