import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseProvidersModule } from './module/database.module';
import { AppService } from './app.service';
@Module({
  imports: [DatabaseProvidersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
