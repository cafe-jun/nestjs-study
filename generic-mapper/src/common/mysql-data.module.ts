import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IDataServices } from './data-service.repository';
import { DATA_BASE_CONFIGURATION } from '../../../configuration';
import { Photo } from '../entities/photo.entities';
import { MySqlGenericRepository } from './mysql-generic.repostiory';
import { MySqlDataService } from './mysql-data.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([]),
    // MongooseModule.forRoot(DATA_BASE_CONFIGURATION.mongoConnectionString),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MySqlDataService,
    },
  ],
  exports: [IDataServices],
})
export class MySqlDataModule {}
