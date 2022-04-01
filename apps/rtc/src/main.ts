import { NestFactory } from '@nestjs/core';
import { RtcModule } from './rtc.module';

async function bootstrap() {
  const app = await NestFactory.create(RtcModule);
  await app.listen(3000);
}
bootstrap();
