import { Photo } from '../entities/photo.entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract photo: IGenericRepository<Photo>;
}
