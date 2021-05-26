import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class UserDTO {
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsString()
  public lastName: string;

  @IsNotEmpty()
  @IsNumber()
  public birthDate: number;

  constructor(name: string, lastName: string, birthDate: number) {
    this.name = name;
    this.lastName = lastName;
    this.birthDate = birthDate;
  }
}