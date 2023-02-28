import { IsNumberString } from 'class-validator';
import { IsEmpty } from 'class-validator';

export class CreateCustomerDto {
  @IsNumberString()
  id: number;
  @IsEmpty()
  name: string;
  age: number;
  address: string;
}
