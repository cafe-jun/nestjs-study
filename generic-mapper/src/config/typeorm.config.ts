import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Jsshin2440!@',
        database: 'study_db',
        entities: [__dirname + '/../entities/*.entities{.ts,.js}'],
        synchronize: true,
        logging: true,
      });

      return dataSource.initialize();
    },
  },
];
