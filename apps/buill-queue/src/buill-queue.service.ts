import { Injectable } from '@nestjs/common';

@Injectable()
export class BuillQueueService {
  getHello(): string {
    return 'Hello World!';
  }
}
