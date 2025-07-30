#!/usr/bin/env node
// @ts-check
// Скрипт для опциональной установки хуков
import cp from 'node:child_process';

if (process.env.CI !== 'true') {
  cp.execSync('lefthook install', { stdio: 'inherit' });
}
