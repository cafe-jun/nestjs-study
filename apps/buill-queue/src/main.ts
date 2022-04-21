import { NestFactory } from '@nestjs/core';
import { BuillQueueModule } from './buill-queue.module';

async function bootstrap() {
  const app = await NestFactory.create(BuillQueueModule);
  await app.listen(3000);
}
bootstrap();
