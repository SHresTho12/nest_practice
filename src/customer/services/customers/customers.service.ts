import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customer/dtos/CreateCustomer.dto';

@Injectable()
export class CustomersService {
  users = [
    {
      id: 1,
      name: 'John Akib',
      age: 30,
      address: {
        id: 1,
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
      },
    },

    {
      id: 2,
      name: 'John Akib',
      age: 30,
      address: {
        id: 1,
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
      },
    },
  ];
  findCustomer = (id: number): object => {
    return this.users.find((user) => user.id === id);
  };
  createCustomer = (createCustomerDto: CreateCustomerDto): void => {
    this.users.push(createCustomerDto);
  };
  getAllCustomers = (): object[] => {
    return this.users;
  };
}
