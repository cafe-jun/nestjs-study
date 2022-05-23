import { Module } from '@nestjs/common';
import { DatabaseProvidersModule } from '../database.module';
import { photoProviders } from './photo.provider';

import { PhotoService } from './photo.service';

@Module({
  imports: [DatabaseProvidersModule],
  providers: [...photoProviders, PhotoService],
})
export class PhotoModule {}
