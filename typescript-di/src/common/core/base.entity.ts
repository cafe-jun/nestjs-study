import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int', { name: 'createdAt', nullable: true })
    createdAt: number;

    @Column('int', { name: 'createdAt', nullable: true })
    updatedAt: number;
}
