import { Type } from 'class-transformer';
import {
  IsNotEmptyObject,
  IsNumberString,
  ValidateNested,
} from 'class-validator';
import { IsEmpty } from 'class-validator';
import { CreateAddressDto } from './CreateAddress.dto';

export class CreateCustomerDto {
  @IsNumberString()
  id: number;
  @IsEmpty()
  name: string;
  age: number;
  @ValidateNested()
  @Type(() => CreateAddressDto)
  @IsNotEmptyObject()
  address: CreateAddressDto;
}
