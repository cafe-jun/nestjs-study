import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('TYpescript OOP Script');
    return 'Hello World!';
  }
}
