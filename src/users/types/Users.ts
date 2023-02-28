//create a interface for user
import { Exclude } from 'class-transformer';
export interface User {
  id: number;
  name: string;
  password: string;
  age: number;
}
export class SerializedUser {
  id: number;
  name: string;
  age: number;
  @Exclude()
  password: string;
}
