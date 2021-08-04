import { ApiProperty } from '@nestjs/swagger';
import { contractorSwaggerSettings } from '../../contractor/data/contractor.swagger';
import { IsString, IsInt, Min, Max, IsOptional } from 'class-validator';
import { invoiceSwaggerSettings } from '../data/invoice.swagger';

export class ConditionsInvoiceDto {
  @IsOptional()
  @IsString()
  @ApiProperty(invoiceSwaggerSettings.position)
  position: string;

  @IsOptional()
  @IsString()
  @ApiProperty(contractorSwaggerSettings.firstName)
  firstName: string;

  @IsOptional()
  @IsString()
  @ApiProperty(contractorSwaggerSettings.lastName)
  lastName: string;
}
