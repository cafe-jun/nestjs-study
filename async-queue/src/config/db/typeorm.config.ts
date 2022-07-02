import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

export const typeOrmConfig: MysqlConnectionOptions = {
  type: 'mysql',
  port: 3306,
  host: 'localhost',
  username: '',
  password: '',
  database: '',
  entities: [],
  logging: true,
};
