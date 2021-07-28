import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { InvoiceController } from './invoice.controller';
import { invoiceProviders } from './invoice.provider';
import { InvoiceService } from './invoice.service';

@Module({
  imports: [DatabaseModule],
  controllers: [InvoiceController],
  providers: [...invoiceProviders, InvoiceService],
})
export class InvoiceModule {}
