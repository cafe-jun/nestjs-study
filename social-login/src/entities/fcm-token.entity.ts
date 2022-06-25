

import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class FcmToken {
  @PrimaryGeneratedColumn()
  userI: number;
  @Column('varchar', { name: 'username', nullable: true })
  username: string;

 
}
