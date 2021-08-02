import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { invoiceSwaggerSettings } from './data/event-log.swagger';

@Entity()
export class EventLog {
  @ApiProperty(invoiceSwaggerSettings.id)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty(invoiceSwaggerSettings.eventType)
  @Column({ type: 'varchar', nullable: false })
  eventType: string;

  @ApiProperty(invoiceSwaggerSettings.event)
  @Column({ type: 'varchar', nullable: false })
  event: string;

  @ApiProperty(invoiceSwaggerSettings.createdAt)
  @Column({ type: 'timestamp', nullable: false })
  createdAt: Date;

}

export const EventType ={
  ADD_INVOICE: 'Add.invoice',
  UPDATE_INVOICE: 'Update.invoice',
  DELETE_INVOICE: 'Delete.invoice',
  FIND_ONE_INVOICE: 'Find.one.invoice',
  FIND_ALL_INVOICE: 'Find.all.invoice',
}