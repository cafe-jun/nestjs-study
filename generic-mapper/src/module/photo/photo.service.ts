import { Inject, Injectable } from '@nestjs/common';
import { Photo } from '../../entities/Photo.entities';
import { Repository } from 'typeorm';

@Injectable()
export class PhotoService {
  constructor(
    @Inject('PHOTO_REPOSITORY')
    private photoRepository: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    return this.photoRepository.find();
  }
}
