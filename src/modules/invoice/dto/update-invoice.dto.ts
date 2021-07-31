import { ApiProperty } from '@nestjs/swagger';
import { invoiceSwaggerSettings } from '../data/invoice.swagger';
import { IsString, IsInt, Min, Max, IsOptional } from 'class-validator';

export class UpdateInvoiceDto {
  @IsOptional()
  @IsString()
  @ApiProperty(invoiceSwaggerSettings.comment)
  comment?: string;

  @IsOptional()
  @IsString()
  @ApiProperty(invoiceSwaggerSettings.description)
  description?: string;

  @IsOptional()
  @IsString()
  @ApiProperty(invoiceSwaggerSettings.position)
  position?: string;

  @IsOptional()
  @IsInt()
  @Min(0, {
    message: "Price netto can't be less than 0",
  })
  @ApiProperty(invoiceSwaggerSettings.priceNetto)
  priceNetto?: number;

  @IsOptional()
  @IsInt()
  @Min(0, {
    message: "VATrate can't be less than 0",
    groups: ['VATrateMinError'],
  })
  @Max(100)
  @ApiProperty(invoiceSwaggerSettings.VATrate)
  VATrate?: number;
}
