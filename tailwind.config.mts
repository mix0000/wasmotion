/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */

const rem = (px) => `${px / 16}rem`;

const range = (from, to, step) => {
  const arr = [from];
  let last_el = arr[arr.length - 1];
  while (last_el < to) {
    arr.push(last_el + step);
    last_el = arr[arr.length - 1];
  }
  return arr;
};

const gravityUi = {
  spacing: {
    transform: (token) => ({
      [`g-${token}`]: `var(--g-spacing-${token})`,
    }),
    tokens: [
      'base',
      '0',
      'half',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
    ],
  },
  fontSize: {
    transform: (token) => ({
      [`g-${token}`]: [
        `var(--g-text-${token}-font-size)`,
        {
          lineHeight: `var(--g-text-${token}-line-height)`,
        },
      ],
    }),
    tokens: [
      'body-1',
      'body-2',
      'body-3',
      'body-short',
      'caption-1',
      'caption-2',
      'header-1',
      'header-2',
      'subheader-1',
      'subheader-2',
      'subheader-3',
      'display-1',
      'display-2',
      'display-3',
      'display-4',
      'code-1',
      'code-2',
      'code-3',
      'code-inline-1',
      'code-inline-2',
      'code-inline-3',
    ],
  },
  colors: {
    transform: (token) => ({
      [`g-${token}`]: `var(--g-color-${token})`,
    }),
  },
  borderRadius: {
    transform: (token) => ({
      [`g-${token}`]: `var(--g-border-radius-${token})`,
    }),
    tokens: ['xs', 's', 'm', 'l', 'xl', '2xl'],
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
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
        ...gravityUi.fontSize.tokens.map(gravityUi.fontSize.transform),
      ),
      boxShadow: {
        '2xl': '0 8px 20px 0 rgba(0, 0, 0, 0.15)',
        'card-shadow/card': '0px 1px 5px 0px rgba(0, 0, 0, 0.15)',
        'popup-shadow/no-border':
          '0 8px 20px var(--_--border-width) var(--g-color-sfx-shadow)',
        modal: '0px 2px 52px 0px rgba(0, 0, 0, 0.1413)',
      },
      spacing: Object.assign(
        {
          ...range(0, 100, 0.5).reduce((acc, spacing) => {
            acc[spacing] = rem(spacing * 4);
            return acc;
          }, {}),
        },
        ...gravityUi.spacing.tokens.map(gravityUi.spacing.transform),
      ),
      borderRadius: {
        ...Object.assign(
          {
            inherit: 'inherit',
          },
          ...gravityUi.borderRadius.tokens.map(
            gravityUi.borderRadius.transform,
          ),
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
      {
        'g-base-background-50': 'var(--g-color-base-background-50)',
      },
    ),
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwind-children'),
    require('tailwind-not'),
  ],
  important: 'html',
};
