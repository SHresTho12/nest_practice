import {
  Controller,
  Get,
  Post,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Req,
  Res,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';

import { CustomersService } from '../../services/customers/customers.service';
import { CreateCustomerDto } from '../../dtos/CreateCustomer.dto';
@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomersService) {}
  @Get(':id')
  getCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ): object {
    const customer = this.customerService.findCustomer(id);
    if (customer) {
      return res.status(200).json(customer);
    }
    return res.status(404).json({ message: 'Customer not found' });
  }

  @Get('/search/:id')
  searchCustomerById(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customerService.findCustomer(id);
    if (customer) {
      return customer;
    }
    return new HttpException('Customer not found', HttpStatus.NOT_FOUND);
  }
  @Get('')
  getAllCustomers() {
    return this.customerService.getAllCustomers();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    console.log(createCustomerDto);

    this.customerService.createCustomer(createCustomerDto);
  }
}
