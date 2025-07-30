/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
import colors from 'tailwindcss/colors';
import animate from 'tailwindcss-animate';
import tailwindNot from 'tailwind-not';

const rem = (px: number) => `${px / 16}rem`;

const range = (from: number, to: number, step: number) => {
  const arr = [from];
  let last_el = arr[arr.length - 1];
  while (last_el < to) {
    arr.push(last_el + step);
    last_el = arr[arr.length - 1];
  }
  return arr;
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: ['selector', '[color-scheme="dark"]'],
  theme: {
    extend: {
      transitionDuration: Object.assign(
        {},
        ...range(0, 1000, 25).map((duration) => ({
          [`${duration}`]: `${duration}ms`,
        })),
      ),
      zIndex: Object.assign(
        {},
        ...range(0, 100, 1).map((zIndex) => ({
          [`${zIndex}`]: `${zIndex}`,
        })),
      ),
      fontSize: Object.assign(
        {},
      ),
      boxShadow: {
        '2xl': '0 8px 20px 0 rgba(0, 0, 0, 0.15)',
        'card-shadow/card': '0px 1px 5px 0px rgba(0, 0, 0, 0.15)',
        modal: '0px 2px 52px 0px rgba(0, 0, 0, 0.1413)',
      },
      spacing: Object.assign(
        {
          ...range(0, 100, 0.5).reduce((acc, spacing) => {
            acc[spacing] = rem(spacing * 4);
            return acc;
          }, {} as Record<number, string>),
        },
      ),
      borderRadius: {
        ...Object.assign(
          {
            inherit: 'inherit',
          },
        ),
      },
      lineHeight: {
        0: '0',
      },
      width: {
        inherit: 'inherit',
        34: '8.5rem',
      },
      maxWidth: {
        inherit: 'inherit',
      },
      height: {
        inherit: 'inherit',
        'full-without-header': 'calc(100% - var(--page-header-height))',
      },
      maxHeight: {
        inherit: 'inherit',
      },
      keyframes: {
        'fade-out': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'fade-out': 'fade-out 1s linear forwards',
      },
      padding: {
        inherit: 'inherit',
      },
    },
    corePlugins: {
      preflight: false,
    },
    colors: Object.assign(
      {
        transparent: 'transparent',
        current: 'currentColor',
        inherit: 'inherit',
      },
      colors
    ),
  },
  plugins: [
    animate,
    tailwindNot,
  ],
  important: 'html',
};
