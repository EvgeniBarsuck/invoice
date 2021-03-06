import {
  Injectable,
  Inject,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
} from '@nestjs/common';
import { Like, Repository } from 'typeorm';
import { EventLog, EventType } from '../eventLog/enent-log.entity';
import { ConditionsInvoiceDto } from './dto/conditions-invoice.dto';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { Invoice } from './invoice.entity';

@Injectable()
export class InvoiceService {
  constructor(
    @Inject('INVOICE_REPOSITORY')
    private invoiceRepository: Repository<Invoice>,
    @Inject('EVENTLOG_REPOSITORY')
    private eventlogRepository: Repository<EventLog>,
  ) {}

  async create(createInvoiceDto: CreateInvoiceDto) {
    try {
      const invoice = await this.invoiceRepository.save(createInvoiceDto);
      await this.eventlogRepository.save({
        createdAt: new Date(),
        eventType: EventType.ADD_INVOICE,
        event: invoice.id,
      });
      return invoice;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findAll(conditions: ConditionsInvoiceDto) {
    try {
      return await this.invoiceRepository
        .createQueryBuilder('invoice')
        .leftJoinAndSelect('invoice.contractor', 'contractor')
        .where('contractor.firstName like :firstName', {
          firstName: `%${conditions.firstName}}%`,
        })
        .andWhere('contractor.lastName like :lastName', {
          lastName: `%${conditions.lastName}}%`,
        })
        .getMany();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findById(id: string) {
    try {
      const invoice = await this.invoiceRepository
        .createQueryBuilder('invoice')
        .leftJoinAndSelect('invoice.contractor', 'contractor')
        .where('invoice.id = :id', {
          id,
        })
        .getOne();

      if (!invoice) {
        throw new HttpException('Invoice not found', HttpStatus.NOT_FOUND);
      }

      return invoice;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async updateById(id: string, updateInvoiceDto) {
    try {
      const invoice = await this.invoiceRepository.update(id, updateInvoiceDto);

      if (!invoice) {
        throw new HttpException('Invoice not found', HttpStatus.NOT_FOUND);
      }

      const resault = await this.invoiceRepository.findOne(id);

      await this.eventlogRepository.save({
        createdAt: new Date(),
        eventType: EventType.UPDATE_INVOICE,
        event: resault.id,
      });

      return resault;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async deleteById(id: string) {
    try {
      const invoice = await this.invoiceRepository.update(
        { id: id, deleted: false },
        {
          deleted: true,
        },
      );

      if (invoice.affected < 1) {
        throw new HttpException('Invoice not found', HttpStatus.NOT_FOUND);
      }

      await this.eventlogRepository.save({
        createdAt: new Date(),
        eventType: EventType.DELETE_INVOICE,
        event: id,
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
