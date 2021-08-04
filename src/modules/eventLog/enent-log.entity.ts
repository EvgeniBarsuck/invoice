import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { eventlogSwaggerSettings } from './data/event-log.swagger';

@Entity()
export class EventLog {
  @ApiProperty(eventlogSwaggerSettings.id)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty(eventlogSwaggerSettings.eventType)
  @Column({ type: 'varchar', nullable: false })
  eventType: string;

  @ApiProperty(eventlogSwaggerSettings.event)
  @Column({ type: 'varchar', nullable: false })
  event: string;

  @ApiProperty(eventlogSwaggerSettings.createdAt)
  @Column({ type: 'timestamp', nullable: false })
  createdAt: Date;

}

export const EventType ={
  ADD_INVOICE: 'Add.invoice',
  UPDATE_INVOICE: 'Update.invoice',
  DELETE_INVOICE: 'Delete.invoice',
}