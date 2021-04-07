import { createConnection } from 'typeorm';

const dev = process.env.NODE_ENV === 'development';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'yyj',
        password: 'yyj',
        database: 'nestjs',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: dev,
      }),
  },
];
