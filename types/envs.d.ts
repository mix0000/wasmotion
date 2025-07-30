/**
 * Переменные окружения, которые вшиваются при сборке проекта.
 * Это статичные данные
 */
declare interface BuildEnvVariables {
  version: string;
  isDev: boolean;
  isProd: boolean;
  isTest?: string;
  isPreview: boolean;
  baseUrl: string;
}

declare const buildEnvs: BuildEnvVariables;
