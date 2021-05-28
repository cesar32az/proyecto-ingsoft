import { IsString, IsNotEmpty, IsNumber, Length, IsEmail, IsDate } from 'class-validator';

export class UserDTO {
  @IsNotEmpty()
  @IsString()
  @IsNotEmpty({ message: 'Tu nombre es requerido' })
  public name!: string;

  @IsNotEmpty()
  @IsString()
  @IsNotEmpty({ message: 'Tu apellido es requerido' })
  public lastName!: string;

  @IsNotEmpty()
  @IsString()
  @IsNotEmpty({ message: 'Tu fecha de nacimiento es requerida' })
  public birthDate!: Date;

  @IsEmail({}, { message: 'email incorrecto' })
  @IsNotEmpty({ message: 'El email es requerido' })
  public email!: string;

  @Length(6, 30, { message: 'La contraseña debe ser mayor a 6 caracteres y menor a 30' })
  @IsNotEmpty({ message: 'La contraseña es requerida' })
  public password!: string;
}
