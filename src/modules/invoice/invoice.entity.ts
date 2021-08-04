import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { invoiceSwaggerSettings } from './data/invoice.swagger';
import { Contractor } from '../contractor/contractor.entity';

@ApiTags('InvoiceModel')
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

  @ApiProperty(invoiceSwaggerSettings.delete)
  @Column({ type: 'bool', nullable: false, default: false })
  deleted: boolean;

  @ApiProperty(invoiceSwaggerSettings.сontractor)
  @ManyToOne(() => Contractor, (contractor) => contractor.id)
  contractor: Contractor;
}
