import { Controller, Get } from '@nestjs/common';
import { SocialLoginService } from './social-login.service';

@Controller()
export class SocialLoginController {
  constructor(private readonly socialLoginService: SocialLoginService) {}

  @Get()
  getHello(): string {
    return this.socialLoginService.getHello();
  }
}
