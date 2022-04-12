import { Injectable } from '@nestjs/common';

@Injectable()
export class BullService {
  getHello(): string {
    return 'Hello World!';
  }
}
