import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CustomersService } from '../../services/customers/customers.service';
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
}
