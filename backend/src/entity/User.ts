import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

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

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: string;
}
