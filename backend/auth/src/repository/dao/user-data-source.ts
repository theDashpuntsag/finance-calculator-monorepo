import { DataSource } from 'typeorm';
import { User } from '../entity';

export const UserDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'thedashpuntsag',
  password: '',
  database: '',
  entities: [User],
  subscribers: [], // Add your subscriber files here
  migrations: [], // Add your migration files here
});
