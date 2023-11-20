import * as dotenv from 'dotenv';
import * as path from 'path';
const envPath = path.resolve(__dirname, '../../.env');
dotenv.config({ path: envPath });

export default {
  client: 'postgresql',
  connection: {
    host: process.env.POSTGRES_HOST || '',
    user: process.env.POSTGRES_USER || '',
    password: process.env.POSTGRES_PASSWORD || '',
    database: process.env.POSTGRES_DB || '',
    port: process.env.POSTGRES_PORT || ''
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: path.resolve(__dirname, '../../src', 'database', 'migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, '../../src', 'database', 'seeds'),
  },
};