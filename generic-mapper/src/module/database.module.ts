import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/config/typeorm.config';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseProvidersModule {}
