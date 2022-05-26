import { InsertOneWriteOpResult, InsertResult } from 'typeorm';

export abstract class IGenericRepository<T> {
  abstract getAll(): Promise<T[]>;

  abstract get(id: string): Promise<T>;

  abstract createRow(item: T);

  abstract updateRow(id: string, item: T);
}
