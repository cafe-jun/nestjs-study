import { Controller, Get } from '@nestjs/common';
import { BuillQueueService } from './buill-queue.service';

@Controller()
export class BuillQueueController {
  constructor(private readonly buillQueueService: BuillQueueService) {}

  @Get()
  getHello(): string {
    return this.buillQueueService.getHello();
  }
}
