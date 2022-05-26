import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IDataServices } from './data-service.repository';
import { MySqlGenericRepository } from './mysql-generic.repostiory';
import { Photo } from '../entities/Photo.entities';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MySqlDataService implements IDataServices, OnApplicationBootstrap {
  photo: MySqlGenericRepository<Photo>;
  constructor(
    @InjectRepository(Photo)
    private photoRepository: Repository<Photo>,
  ) {}

  onApplicationBootstrap() {
    this.photo = new MySqlGenericRepository<Photo>(this.photoRepository);
  }
}
