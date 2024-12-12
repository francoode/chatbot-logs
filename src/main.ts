import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices/interfaces';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://user:password@rabbitmq:5672'],
      queue: 'logs_queue',
      queueOptions: {
        durable: true,
      },
    },
  });
  await app.startAllMicroservices();

  await app.listen(3000);
}
bootstrap();
