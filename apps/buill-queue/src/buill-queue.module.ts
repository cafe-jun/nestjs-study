import { Module } from '@nestjs/common';
import { BuillQueueController } from './buill-queue.controller';
import { BuillQueueService } from './buill-queue.service';

@Module({
  imports: [],
  controllers: [BuillQueueController],
  providers: [BuillQueueService],
})
export class BuillQueueModule {}
