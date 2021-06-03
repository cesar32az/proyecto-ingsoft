import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './User';

@Entity()
export class Gasto {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(() => User)
  @JoinColumn()
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
