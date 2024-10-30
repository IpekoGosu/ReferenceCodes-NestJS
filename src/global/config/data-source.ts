import * as path from 'path';
import { DataSource } from 'typeorm';

export const dataSource: DataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  database: 'demo',
  username: 'user',
  password: '1234',
  entities: [
    path.join(__dirname, 'src/entity/**/*.entity.ts'),
    path.join(__dirname, 'dist/entity/**/*.js')
  ],
  synchronize: false,
  logging: true
});
