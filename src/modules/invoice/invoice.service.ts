import { Injectable, Inject } from '@nestjs/common';
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
    const invoice = this.invoiceRepository.save(createInvoiceDto);
    return invoice;
  }

  async findAll() {
    return this.invoiceRepository.find();
  }
}
