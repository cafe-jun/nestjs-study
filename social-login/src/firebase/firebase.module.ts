import { Module } from '@nestjs/common';
import { FireBaseService } from './firebase.service';

@Module({
  providers: [FireBaseService],
})
export class FireBaseModule {}
