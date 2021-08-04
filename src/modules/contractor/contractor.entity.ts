import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { contractorSwaggerSettings } from './data/contractor.swagger';
import { Invoice } from '../invoice/invoice.entity';

@Entity()
export class Contractor {
  @ApiProperty(contractorSwaggerSettings.id)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty(contractorSwaggerSettings.firstName)
  @Column({ type: 'varchar', length: 30, default: null, nullable: true })
  firstName: string;

  @ApiProperty(contractorSwaggerSettings.lastName)
  @Column({ type: 'varchar', length: 30, nullable: false })
  lastName: string;

  @ApiProperty(contractorSwaggerSettings.email)
  @Column({ type: 'varchar', length: 30, nullable: false })
  email: string;

  @ApiProperty(contractorSwaggerSettings.blocked)
  @Column({ type: 'bool', nullable: false, default: false })
  blocked: boolean;

  @ApiProperty(contractorSwaggerSettings.deleted)
  @Column({ type: 'bool', nullable: false, default: false })
  deleted: boolean;

  @OneToMany(() => Invoice, (invoice) => invoice.id)
  invoices: Invoice[];
}
