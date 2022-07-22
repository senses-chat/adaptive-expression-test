# Adaptive Expression Test

The goal of this test is to connect Microsoft's [Adaptive Expression](https://docs.microsoft.com/en-us/azure/bot-service/bot-builder-concept-adaptive-expressions?view=azure-bot-service-4.0&tabs=comparison) from BotFramework into our own homebrew NodeJS chatbot framework based on XState.

Once you start the project, you should be able to test by sending a POST request to the bot:

```
POST http://localhost:3000/bot/main/messages

{
	"sender": "simon",
	"message": "/greet{\"scene\": \"default\"}"
}
```

You should see a response. However, if you try to send this, the bot will not respond:

```
POST http://localhost:3000/bot/main/messages

{
	"sender": "simon",
	"message": "/greet{\"scene\": \"special\"}"
}
```

You should see from the error message that, there is a condition in the state machine that is not fully defined. Instead of directly define it in the `BotGuards` class, we would like to use Microsoft's [adaptive-expressions](https://github.com/microsoft/botbuilder-js/tree/main/libraries/adaptive-expressions) library to parse the condition label directly and automatically set up the guards at startup.

Since there isn't much documentation for adaptive-expressions, one of the best ways to understand is to try to run a BotFramework bot and see how the library is used in BotFramework.

https://github.com/microsoft/BotBuilder-Samples/tree/main/experimental/adaptive-dialog/javascript_nodejs/21.adaptive-bot