import { Column } from 'typeorm';
import { BaseEntity } from '../common/core/base.entity';

export class Users extends BaseEntity {
  @Column('varchar', { name: 'username', nullable: true })
  username: string;

  @Column('int', { name: 'age', nullable: true })
  age: number;

  @Column('varchar', { name: 'profileImgUrl', nullable: true })
  profileImgUrl: string;
}
