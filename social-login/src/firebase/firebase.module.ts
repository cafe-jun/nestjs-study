import { Module } from '@nestjs/common';
import { FireBaseController } from './firebase.controller';
import { FireBaseService } from './firebase.service';

@Module({
  providers: [FireBaseService],
  controllers: [FireBaseController],
})
export class FireBaseModule {}
