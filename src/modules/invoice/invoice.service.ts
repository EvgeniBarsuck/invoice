import {
  Injectable,
  Inject,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
} from '@nestjs/common';
import { Like, Repository } from 'typeorm';
import { ConditionsInvoiceDto } from './dto/conditions-invoice.dto';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { Invoice } from './invoice.entity';

@Injectable()
export class InvoiceService {
  constructor(
    @Inject('INVOICE_REPOSITORY')
    private invoiceRepository: Repository<Invoice>,
  ) {}

  async create(createInvoiceDto: CreateInvoiceDto) {
    try {
      const invoice = await this.invoiceRepository.save(createInvoiceDto);
      return invoice;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findAll(conditions: ConditionsInvoiceDto) {
    try {
      return await this.invoiceRepository.find({
        сontractorsName: Like(`%${conditions?.сontractorsName || ''}%`),
        position: Like(`%${conditions?.position || ''}%`),
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findById(id: string) {
    try {
      const invoice = await this.invoiceRepository.findOne(id);

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

      return await this.invoiceRepository.findOne(id);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async deleteById(id: string) {
    try {
      const invoice = await this.invoiceRepository.delete(id);

      if (!invoice) {
        throw new HttpException('Invoice not found', HttpStatus.NOT_FOUND);
      }
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
