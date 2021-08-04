import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ContractorController } from './contractor.controller';
import { contractorProviders } from './contractor.provider';
import { ContractorService } from './contractor.service';

@Module({
  controllers: [ContractorController],
  providers: [...contractorProviders, ContractorService],
  imports: [DatabaseModule],
})
export class ContractorModule {}
