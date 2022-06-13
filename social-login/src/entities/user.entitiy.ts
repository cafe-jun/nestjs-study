import { Column } from 'typeorm';

export class Users {
  @Column('varchar', { name: 'username', nullable: true })
  username: string;

  @Column('int', { name: 'age', nullable: true })
  age: number;

  @Column('varchar', { name: 'profileImgUrl', nullable: true })
  profileImgUrl: string;
}
