import {
  Entity,
  InsertOneWriteOpResult,
  InsertResult,
  InsertWriteOpResult,
  Repository,
} from 'typeorm';
import { IGenericRepository } from './generic-repository.abstract';

export class MySqlGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Repository<T>;
  private _populateOnFind: string[];

  constructor(repository: Repository<T>) {
    this._repository = repository;
  }

  getAll(): Promise<T[]> {
    return this._repository.find();
  }

  get(id: any): Promise<T> {
    return this._repository.findOne(id);
  }

  createRow(item: T) {
    return this._repository.create(item);
  }

  updateRow(id: string, item: T) {
    return this._repository.update(id, item);
  }
}
