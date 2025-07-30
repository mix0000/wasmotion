/* eslint-disable import/default */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/// <reference types="vitest" />
/// <reference types="vite-plugin-svgr/client" />

import viteLegacyPlugin from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import browserslist from 'browserslist';
import dotenv from 'dotenv';
import { default as checker } from 'vite-plugin-checker';
import { createHtmlPlugin as html } from 'vite-plugin-html';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vitest/config';

import packageJson from './package.json';

dotenv.config();

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

dotenv.config({
  path: `./.env.${process.env.NODE_ENV}`,
  override: true,
})

const browserTargets = browserslist.loadConfig({ path: '.' });

const isPreview = process.env.MODE === 'preview';
const port = +process.env.PORT || 3011;
const baseUrl:string  = process.env.BASE_PATH || '/'

const buildEnvs: BuildEnvVariables = {
  version: packageJson.version,
  isDev: !isProd,
  isProd: isProd,
  baseUrl: baseUrl,
  isTest: process.env.TESTS,
  isPreview: isPreview,
} satisfies BuildEnvVariables;

buildEnvs.baseUrl = buildEnvs.baseUrl.startsWith('/') ? buildEnvs.baseUrl : `/${buildEnvs.baseUrl}`;

console.info('build envs', buildEnvs);

// https://vitejs.dev/config/
export default defineConfig({
  appType: 'spa',
  mode: isProd ? 'production' : 'development',
  base: buildEnvs.baseUrl,
  clearScreen: true,
  define: {
    buildEnvs: JSON.stringify(buildEnvs),
  },
  server: {
    port,
    hmr: true,
    cors: false,
  },
  preview: {
    port,
  },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  logLevel: 'info',
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
    modules: {
      localsConvention: 'camelCaseOnly',
      generateScopedName: isProd
        ? '[hash:base64:4]'
        : '[name]__[local]___[hash:base64:5]',
    },
  },
  build: {
    cssCodeSplit: true,
    reportCompressedSize: true,
    emptyOutDir: true,
    minify: isProd,
    cssMinify: isProd,
    cssTarget: false,
    ssrEmitAssets: false,
    ssrManifest: false,
    ssr: false,
    rollupOptions: {
      maxParallelFileOps: 100,
      cache: true,
      output: {
        entryFileNames: 'static/js/bundle.[hash].js',
        assetFileNames: 'static/assets/[name].[hash].[ext]',
        chunkFileNames: 'static/js/[name].[hash].js',
      },
    },
  },
  esbuild: {
    tsconfigRaw: {
      compilerOptions: {
        experimentalDecorators: true,
      },
    },
  },
  plugins: [
    react({
      babel: {
        plugins: [
          [
            '@babel/plugin-proposal-decorators',
            {
              version: '2023-05',
            },
          ],
          ['@babel/plugin-proposal-explicit-resource-management'],
        ],
      },
    }),
    viteLegacyPlugin({
      targets: browserTargets,
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
    svgr({}),
    isProd &&
      checker({
        typescript: true,
        eslint: { lintCommand: 'eslint src --config ./.eslintrc.cjs' },
      }),
    html({
      minify: isProd,
    })
  ].filter(Boolean),
});
