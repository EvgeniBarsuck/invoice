import { Controller, Post, Body, Get, Param, UseFilters } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { InvoiceHttpExceptionFilter } from './invoice-http-exception.filter';
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
  @UseFilters(InvoiceHttpExceptionFilter)
  async create(
    @Body(new InvoiceValidationPipe())
    createInvoiceDto: CreateInvoiceDto,
  ) {
    return this.invoiceService.create(createInvoiceDto);
  }

  @ApiOperation({ summary: 'Get all invoice' })
  @ApiResponse({
    status: 200,
    description: 'Get all invoice successfully',
  })
  @Get()
  async findAll() {
    return this.invoiceService.findAll();
  }

  @ApiOperation({ summary: 'Get invoice by id' })
  @ApiResponse({
    status: 200,
    description: 'Get invoice by id successfully',
  })
  @UseFilters(InvoiceHttpExceptionFilter)
  @Get(':id')
  async findById(@Param() id: string) {
    return this.invoiceService.findById(id);
  }
}
