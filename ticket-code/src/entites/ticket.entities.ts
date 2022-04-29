import { Entity } from 'typeorm';

@Entity('Ticket')
export class Ticket {
  title: string;
}
