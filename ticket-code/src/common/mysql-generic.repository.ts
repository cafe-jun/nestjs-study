import { Repository } from 'typeorm';
import { IGenericRepository } from './generic-repository.abstract';

export class MySqlGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Repository<T>;

  constructor(repository: Repository<T>) {
    this._repository = repository;
  }

  getAll(): Promise<T[]> {
    return this._repository.find();
  }

  get(id: any): Promise<T> {
    return this._repository.getId(id);
  }

  create(item: T) {
    return this._repository.save(item);
  }

  update(id: string, item: T) {
    return this._repository.update(id, item);
  }
}
