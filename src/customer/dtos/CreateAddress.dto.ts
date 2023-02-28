import { IsNotEmpty } from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty()
  id: number;
  street: string;
  @IsNotEmpty()
  city: string;
  state: string;
  @IsNotEmpty()
  zip: string;
}
