import { Module } from '@nestjs/common';

import { ConfigModule, RedisModule } from 'src/modules';

import { BotActions } from './bot.actions';
import { BotController } from './bot.controller';
import { BotGuards } from './bot.guards';
import { machineProviders } from './bot.machine';
import { ParserService } from './parser.service';
import { BotRunnerService } from './runner.service';
import { TrackerService } from './tracker.service';

@Module({
  imports: [ConfigModule, RedisModule],
  controllers: [BotController],
  providers: [
    ...machineProviders,
    BotActions,
    BotGuards,
    ParserService,
    TrackerService,
    BotRunnerService,
  ],
  exports: [BotRunnerService],
})
export class BotModule {}
