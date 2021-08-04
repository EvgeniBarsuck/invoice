import { Connection } from 'typeorm';
import { Contractor } from './contractor.entity';

export const contractorProviders = [
  {
    provide: 'CONTRACTOR_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(Contractor),
    inject: ['DATABASE_CONNECTION'],
  },
];
