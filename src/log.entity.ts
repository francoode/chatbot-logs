import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum LogTypeEnum {
  ACCESS,
}

@Entity()
export class Log {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  clientId: string;

  @Column({ nullable: false, enum: LogTypeEnum })
  type: LogTypeEnum;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
