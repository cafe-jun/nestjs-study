import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Jsshin2440!@',
        database: 'ticket',
        entities: [__dirname + '/../**/*.enti{.ts,.js}'],
        synchronize: false,
        cli: {
          entitiesDir: __dirname + '',
        },
      }),
  },
];
