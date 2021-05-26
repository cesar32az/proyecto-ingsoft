import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { IsEmail, IsNotEmpty, Length } from "class-validator";
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  lastName!: string;
  
  @Column('date')
  birthDate!: Date;

  @Column({ name: 'email' })
  @IsEmail({}, { message: 'email incorrecto' })
  @IsNotEmpty({ message: 'El email es requerido' })
  email!: string;

  @Column()
  @Length(6, 30, { message: 'La contraseña debe ser mayor a 6 caracteres y menor a 30' })
  @IsNotEmpty({ message: 'La contraseña es requerida' })
  password!: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: string;
}
