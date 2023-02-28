import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { User, SerializedUser } from 'src/users/types/Users';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'Akib',
      age: 30,
      password: '1234344',
    },
    {
      id: 2,
      name: 'John SAkib',
      age: 30,
      password: '1234344',
    },
  ];

  getUsers(): User[] {
    return this.users;
  }
  getSeralizedUsers(): User[] {
    return this.users.map((users) => plainToClass(SerializedUser, users));
  }
  getUserByUsername(name: string): User {
    return this.users.find((user) => user.name === name);
  }
  getUserById(id: number): User {
    return this.users.find((user) => user.id === id);
  }
}
