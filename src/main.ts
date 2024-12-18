import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices/interfaces';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { LOG_QUEUE } from '@chatbot/shared-lib';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://user:password@rabbitmq:5672'],
      queue: LOG_QUEUE,
    },
  });
  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
