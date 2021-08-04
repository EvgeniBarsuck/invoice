import { ApiProperty } from '@nestjs/swagger';
import { invoiceSwaggerSettings } from '../data/invoice.swagger';
import { IsString, IsInt, MinLength, Min, Max } from 'class-validator';
import { Contractor } from 'src/modules/contractor/contractor.entity';

export class CreateInvoiceDto {
  @IsString()
  @ApiProperty(invoiceSwaggerSettings.comment)
  comment: string;

  @IsString()
  @ApiProperty(invoiceSwaggerSettings.description)
  description: string;

  @IsString()
  @ApiProperty(invoiceSwaggerSettings.position)
  position: string;

  @IsInt()
  @Min(0, {
    message: "Price netto can't be less than 0",
  })
  @ApiProperty(invoiceSwaggerSettings.priceNetto)
  priceNetto: number;

  @IsInt()
  @Min(0, {
    message: "VATrate can't be less than 0",
    groups: ['VATrateMinError'],
  })
  @Max(100)
  @ApiProperty(invoiceSwaggerSettings.VATrate)
  VATrate: number;

  @IsString()
  @MinLength(5, {
    message: "Contractors name can't be less than 5",
  })
  @ApiProperty(invoiceSwaggerSettings.сontractor)
  сontractor: Contractor;
}
