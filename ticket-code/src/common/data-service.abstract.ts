import { Book } from '../entites/book.entities';
import { Ticket } from '../entites/ticket.entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract books: IGenericRepository<Book>;
  abstract ticket: IGenericRepository<Ticket>;
}
