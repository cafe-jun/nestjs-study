import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { IDataServices } from './data-service.abstract';
import { MySqlGenericRepository } from './mysql-generic.repository';
import { Book, Ticket } from '../common/model/index';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MySqlDataService implements IDataServices, OnApplicationBootstrap {
  books: MySqlGenericRepository<Book>;
  ticket: MySqlGenericRepository<Ticket>;

  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
    @InjectRepository(Ticket)
    private ticketRepository: Repository<Ticket>,
  ) {}

  onApplicationBootstrap() {
    this.books = new MySqlGenericRepository<Book>(this.booksRepository);
    this.ticket = new MySqlGenericRepository<Ticket>(this.ticketRepository);
  }
}
