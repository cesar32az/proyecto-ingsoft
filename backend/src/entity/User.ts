import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { Gasto } from './Gasto';
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
  email!: string;

  @Column()
  password!: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: string;

  @OneToMany(() => Gasto, (gasto) => gasto.user)
  gastos!: Gasto[];
}
