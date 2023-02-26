import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  users = [
    {
      id: 1,
      name: 'John Akib',
      age: 30,
      address: '123 Main St',
    },

    {
      id: 2,
      name: 'John Akib',
      age: 30,
      address: '123 Main St',
    },
  ];
  findCustomer = (id: number): object => {
    return this.users.find((user) => user.id === id);
  };
}
