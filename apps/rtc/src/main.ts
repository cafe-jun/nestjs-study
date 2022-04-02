import { NestFactory } from '@nestjs/core';
import { RtcModule } from './rtc.module';

async function bootstrap() {
    const app = await NestFactory.create(RtcModule);
    await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.REDIS,
        options: {
            url: 'redis://localhost:6379',
        },
    });
    await app.listen(3000);
}
bootstrap();
