import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogsService } from './logs.service';
import { LogsController } from './logs.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: Number(3306),
      username: 'root',
      password: 'appmodule',
      database: 'chat_bot',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [LogsController],
  providers: [LogsService],
  exports: [LogsService]
})
export class AppModule {}
