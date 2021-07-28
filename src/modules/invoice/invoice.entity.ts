import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { invoiceSwaggerSettings } from './invoice.swagger';

@Entity()
export class Invoice {
  @ApiProperty(invoiceSwaggerSettings.id)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty(invoiceSwaggerSettings.comment)
  @Column({ type: 'text', default: null, nullable: true })
  comment: string;

  @ApiProperty(invoiceSwaggerSettings.description)
  @Column({ type: 'text', nullable: false })
  description: string;

  @ApiProperty(invoiceSwaggerSettings.position)
  @Column({ type: 'varchar', length: 30, nullable: false })
  position: string;

  @ApiProperty(invoiceSwaggerSettings.priceNetto)
  @Column({ type: 'int', nullable: false })
  priceNetto: number;

  @ApiProperty(invoiceSwaggerSettings.VATrate)
  @Column({ type: 'int', nullable: false })
  VATrate: number;

  @ApiProperty(invoiceSwaggerSettings.сontractorsName)
  @Column({ type: 'varchar', nullable: false })
  сontractorsName: string;
}
