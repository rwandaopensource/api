import dotenv from 'dotenv-extended';
import { resolve } from 'path';

const envName = (process.env.NODE_ENV || '').toLowerCase();
const path = resolve(__dirname, `../.env.${envName}`);
const isTest = envName === 'test';
const isDevelopment = envName === 'development';

dotenv.load({
  silent: false,
  path,
  defaults: resolve(__dirname, '../.env'),
  schema: resolve(__dirname, '../.env.sample'),
  errorOnMissing: !isTest,
  errorOnExtra: false,
  errorOnRegex: false,
  includeProcessEnv: true,
  overrideProcessEnv: true,
});

export default {
  ...process.env,
  PORT: isDevelopment ? 5000 : 8080, // Don't ever change this(Azure connect app to this port)
  NODE_ENV: process.env.NODE_ENV || 'production',
  isTest,
  isDevelopment,
};
