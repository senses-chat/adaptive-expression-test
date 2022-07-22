import { Injectable } from '@nestjs/common';
import { BotContext, GreetEvent } from './bot.interface';

@Injectable()
export class BotGuards {
  private isDefaultScene(context: BotContext, event: GreetEvent): boolean {
    return event.scene === 'default';
  }

  public getGuards() {
    return {
      isDefaultScene: this.isDefaultScene.bind(this),
    };
  }
}
