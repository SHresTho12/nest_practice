import { Module } from '@nestjs/common';
import { CustomerController } from './controller/customer/customer.controller';
import { CustomersService } from './services/customers/customers.service';

@Module({
  controllers: [CustomerController],
  providers: [CustomersService],
})
export class CustomerModule {}
