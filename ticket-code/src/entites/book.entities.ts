import { Entity } from 'typeorm';
@Entity('Book')
export class Book {
  title: string;
}
