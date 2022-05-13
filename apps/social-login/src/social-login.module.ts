import { Module } from '@nestjs/common';
import { SocialLoginController } from './social-login.controller';
import { SocialLoginService } from './social-login.service';

@Module({
  imports: [],
  controllers: [SocialLoginController],
  providers: [SocialLoginService],
})
export class SocialLoginModule {}
