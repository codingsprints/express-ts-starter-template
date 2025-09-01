import * as dotenv from 'dotenv';
import path from 'path';
import { NODE_ENV_VAL } from './constants';

const nodeENV: string = NODE_ENV_VAL.DEVELOPMENT;
// const nodeENV: string = NODE_ENV_VAL.TEST;
// const nodeENV: string = NODE_ENV_VAL.PRODUCTION;

dotenv.config({
  path: path.resolve(
    __dirname,
    `../../.env.${process.env.NODE_ENV ?? nodeENV}`,
  ),
});

interface Config {
  port: number;
  nodeEnv: string;
  baseUrl: string;
  hostname: string;
}

export const configENV: Config = {
  port: parseInt(process.env.PORT ?? '5050', 10),
  nodeEnv: process.env.NODE_ENV || 'dev',
  baseUrl: process.env.BASE_URL ?? '/pizza-app/catelog-service/api/v1',
  hostname: process.env.HOSTNAME ?? 'localhost',
};
