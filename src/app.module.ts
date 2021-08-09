import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ContractorModule } from './modules/contractor/contractor.module';
import { FileUploadModule } from './modules/file-upload/file-upload.module';
import { InvoiceModule } from './modules/invoice/invoice.module';
import { MinioClientModule } from './modules/minio-client/minio-client.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    InvoiceModule,
    ContractorModule,
    MinioClientModule,
    FileUploadModule,
  ],
})
export class AppModule {}
