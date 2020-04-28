import dotenv from 'dotenv-extended';
import { resolve } from 'path';

const envName = (process.env.NODE_ENV || '').toLowerCase();
const path = resolve(__dirname, `../.env.${envName}`);
const isTest = envName === 'test';
const isDevelopment = envName === 'development';

dotenv.load({
  silent: true,
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
  PORT: isDevelopment || isTest ? 5000 : process.env.PORT, // Don't change this
  NODE_ENV: process.env.NODE_ENV || 'production',
  isTest,
  isDevelopment,
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
  BACKEND_URL: process.env.BACKEND_URL,
  GITHUB_USER_TOKEN: process.env.GITHUB_USER_TOKEN,
  FRONTEND_URL: process.env.FRONTEND_URL,
  PRIVATE_KEY: process.env.PRIVATE_KEY,
  SLACK_WEBHOOK_URL: process.env.SLACK_WEBHOOK_URL,
};
