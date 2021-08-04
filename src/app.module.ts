import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ContractorModule } from './modules/contractor/contractor.module';
import { InvoiceModule } from './modules/invoice/invoice.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    InvoiceModule,
    ContractorModule,
  ],
})
export class AppModule {}
