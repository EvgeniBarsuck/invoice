import { Connection } from 'typeorm';
import { EventLog } from './enent-log.entity';

export const eventlogProviders = [
  {
    provide: 'EVENTLOG_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(EventLog),
    inject: ['DATABASE_CONNECTION'],
  },
];