import '@/app/styles/tailwind.css';

import '@/app/styles/globals.scss';

import '@/shared/config';

/**
 * Special fix for explicit resource management in FireFox
 */
if (!Symbol.dispose) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  Symbol.dispose = Symbol.for('Symbol.dispose');
}
