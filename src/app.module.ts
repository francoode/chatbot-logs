import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogsModule } from './logs/logs.module';
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
    LogsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
