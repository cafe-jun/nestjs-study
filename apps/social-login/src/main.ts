import { NestFactory } from '@nestjs/core';
import { SocialLoginModule } from './social-login.module';

async function bootstrap() {
  const app = await NestFactory.create(SocialLoginModule);
  await app.listen(3000);
}
bootstrap();
