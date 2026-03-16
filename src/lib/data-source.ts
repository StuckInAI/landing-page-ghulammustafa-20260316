import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Subscriber } from './entities/Subscriber';
import path from 'path';

const dbPath = process.env.DATABASE_PATH || './database.sqlite';
const resolvedPath = path.isAbsolute(dbPath) ? dbPath : path.join(process.cwd(), dbPath);

export const AppDataSource = new DataSource({
  type: 'better-sqlite3',
  database: resolvedPath,
  synchronize: true,
  logging: false,
  entities: [Subscriber],
  migrations: [],
  subscribers: [],
});

let initialized = false;

export async function getDataSource(): Promise<DataSource> {
  if (!initialized) {
    await AppDataSource.initialize();
    initialized = true;
  }
  return AppDataSource;
}
