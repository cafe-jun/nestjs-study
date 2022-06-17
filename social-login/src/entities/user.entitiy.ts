import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Users {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('varchar', { name: 'username', nullable: true })
  username: string;

  @Column('int', { name: 'age', nullable: true })
  age: number;

  @Column('varchar', { name: 'profileImgUrl', nullable: true })
  profileImgUrl: string;

  @Column('varchar', { name: 'accessToken', nullable: true })
  accessToken: number;
}
