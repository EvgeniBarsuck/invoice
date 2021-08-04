import { createConnection } from 'typeorm';
import { EventLog } from '../eventLog/enent-log.entity';
import { Invoice } from '../invoice/invoice.entity';
import { Contractor } from '../contractor/contractor.entity';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        entities: [Invoice, EventLog, Contractor],
        synchronize: true,
      }),
  },
];
