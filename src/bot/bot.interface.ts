export type UnknownEvent = { type: 'unknown' };

export type GreetEvent = {
  type: 'greet';
  welcome_code?: string;
  scene: string;
  scene_param?: string;
  external_userid?: string;
  openid?: string;
  sender?: string;
};

export type BotEvent = UnknownEvent | GreetEvent;

export interface BotContext {
  sender_id: string;
}
