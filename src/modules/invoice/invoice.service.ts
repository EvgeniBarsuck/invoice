import {
  Injectable,
  Inject,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
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

  async findAll() {
    try {
      return await this.invoiceRepository.find();
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
}
