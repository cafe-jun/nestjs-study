import { Injectable } from '@nestjs/common';

@Injectable()
export class SocialLoginService {
  getHello(): string {
    return 'Hello World!';
  }
}
