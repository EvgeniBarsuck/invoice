import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { EventLogModule } from '../eventLog/event-log.module';
import { InvoiceController } from './invoice.controller';
import { invoiceProviders } from './invoice.provider';
import { InvoiceService } from './invoice.service';

@Module({
  imports: [DatabaseModule, EventLogModule],
  controllers: [InvoiceController],
  providers: [...invoiceProviders, InvoiceService],
})
export class InvoiceModule {}
