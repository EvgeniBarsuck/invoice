import { ApiProperty } from '@nestjs/swagger';
import { invoiceSwaggerSettings } from '../data/invoice.swagger';
import { IsString, IsInt, Min, Max, IsOptional } from 'class-validator';

export class ConditionsInvoiceDto {
  @IsOptional()
  @IsString()
  @ApiProperty(invoiceSwaggerSettings.position)
  position: string;

  @IsOptional()
  @IsString()
  @ApiProperty(invoiceSwaggerSettings.сontractorsName)
  сontractorsName: string;
}
