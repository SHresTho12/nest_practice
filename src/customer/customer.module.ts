import { Module, NestModule, RequestMethod } from '@nestjs/common';
import { MiddlewareConsumer } from '@nestjs/common/interfaces/middleware/middleware-consumer.interface';
import { CustomerController } from './controller/customer/customer.controller';
import { ValidateCustomerMiddleware } from './middlewares/validate-customer.middlewre';
import { CustomersService } from './services/customers/customers.service';

@Module({
  controllers: [CustomerController],
  providers: [CustomersService],
})
export class CustomerModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateCustomerMiddleware).forRoutes({
      path: 'customer/search/:id',
      method: RequestMethod.GET,
    });
  }
}
