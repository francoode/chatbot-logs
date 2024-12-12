import { Controller } from '@nestjs/common';
import { LogsService } from './logs.service';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
  EventPattern
} from '@nestjs/microservices';

@Controller()
export class LogsController {
  constructor(private readonly logsService: LogsService, 
    
  ) {}

  @EventPattern('lol')
  async getNotifications(@Payload() data: number[], @Ctx() context: RmqContext) {
    console.log(`Pattern: ${context.getPattern()}`);
  }
}
