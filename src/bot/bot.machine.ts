import { Provider } from '@nestjs/common';
import { createMachine, StateMachine } from 'xstate';

export const MAIN_MACHINE = Symbol.for('MAIN_MACHINE');

const machineConfig = {
  id: 'bot',
  initial: 'idle',
  states: {
    idle: {
      on: {
        greet: [
          {
            actions: ['utter_default_intro', 'action_listen'],
            cond: 'isDefaultScene',
          },
          {
            actions: ['utter_special_intro', 'action_listen'],
            cond: 'event.scene == "special"',
          },
          {
            actions: ['utter_introduction', 'action_listen'],
          },
        ],
        '*': {
          actions: ['utter_ask_rephrase', 'action_listen'],
        },
      },
    },
  },
};

export const machineConfigMap = {
  main: machineConfig,
};

export const machineProviders: Array<
  Provider<StateMachine<any, any, any, any, any>>
> = [
  {
    provide: MAIN_MACHINE,
    useFactory: () => {
      const machine =
        /** @xstate-layout N4IgpgJg5mDOIC5QCMD2AXAdASwgGzAGIoAnMMdRUAB1Vm3W1QDsqQAPRAFgGZMA2AIwB2QQA5hABkGThXSQCYuAGhABPRAoCcYzFwCsknWJ7CFk2cIC+V1Wiy4ChAGbYCAfQCu1PKgCGEJBstPSMLGycCPqCesL8+vxcCoJKRgqqGgjiCnqGWlr85tKJNnYYOPhEAFTBdAxMrEgc3OnqiPz8uTKS8gom5jyCNrYgzKiB8E32FQS1oQ0RiFpcArxKPDxa+lqiiRncglq5RmKS+rxi0VylIPZz9eFNkeL7CAC0nedaFvJcf-FiMRaYZWIA */
        createMachine(machineConfig);
      return machine;
    },
  },
];
