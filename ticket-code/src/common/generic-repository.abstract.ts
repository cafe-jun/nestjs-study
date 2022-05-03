import { DeepPartial } from 'typeorm';

export abstract class IGenericRepository<T> {
  abstract getAll(): Promise<T[]>;

  abstract get(id: string): Promise<T>;

  abstract create(item: DeepPartial<T>);

  abstract update(id: string, item: T);
}
