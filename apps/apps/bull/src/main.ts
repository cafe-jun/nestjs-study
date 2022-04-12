import { NestFactory } from '@nestjs/core';
import { BullModule } from './bull.module';

async function bootstrap() {
  const app = await NestFactory.create(BullModule);
  await app.listen(3000);
}
bootstrap();
