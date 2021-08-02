import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { EventLogController } from './event-log.controller';
import { eventlogProviders } from './event-log.provider';
import { EventLogService } from './event-log.service';

@Module({
  controllers: [EventLogController],
  providers: [...eventlogProviders, EventLogService],
  imports: [DatabaseModule],
  exports: [...eventlogProviders, EventLogService]
})
export class EventLogModule {}
