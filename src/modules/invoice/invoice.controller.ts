import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { InvoiceService } from './invoice.service';
import { InvoiceValidationPipe } from './invoice.validator';

@Controller('invoice')
@ApiTags('Invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @ApiOperation({ summary: 'Create invoice' })
  @ApiResponse({
    status: 201,
    description: 'Invoice created successfully',
  })
  @ApiBody({ type: CreateInvoiceDto })
  @Post()
  async create(
    @Body(new InvoiceValidationPipe())
    createInvoiceDto: CreateInvoiceDto,
  ) {
    return this.invoiceService.create(createInvoiceDto);
  }

  @ApiOperation({ summary: 'Create invoice' })
  @ApiResponse({
    status: 200,
    description: 'Get all invoice',
  })
  @Get()
  async findAll() {
    return this.invoiceService.findAll();
  }
}
