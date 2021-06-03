import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from './User';
import { isDefined } from 'class-validator';

@Entity()
export class Gasto {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.gastos)
  user!: User;

  @Column()
  gasto!: string;

  @Column()
  costo!: number;

  @Column()
  categoria!: string;

  @Column('date')
  fecha!: Date;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: string;
}
