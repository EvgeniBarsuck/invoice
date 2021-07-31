import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  UseFilters,
  Delete,
  Response,
  HttpCode,
} from '@nestjs/common';
import {
  ApiBody,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
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
  @ApiNotFoundResponse({
    status: 404,
    description: 'Invoice not found',
  })
  @UseFilters(InvoiceHttpExceptionFilter)
  @Get(':id')
  async findById(@Param() id: string) {
    return this.invoiceService.findById(id);
  }

  @ApiOperation({ summary: 'Delete invoice by id' })
  @HttpCode(204)
  @ApiNoContentResponse({
    status: 204,
    description: 'Invoice delete successfully.',
  })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Invoice not found',
  })
  @UseFilters(InvoiceHttpExceptionFilter)
  @Delete(':id')
  async deleteById(@Param() id: string) {
    return this.invoiceService.deleteById(id);
  }
}
