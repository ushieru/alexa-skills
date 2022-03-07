import { HandlerInput } from 'ask-sdk-core';

export const HelloWorldIntent = {
    canHandle(handlerInput: HandlerInput) {
        const { request } = handlerInput.requestEnvelope;
        return request.type === 'IntentRequest' && request.intent.name === 'HelloWorldIntent';
    },
    handle(handlerInput: HandlerInput) {
        const speechText = 'Hola mundo';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
}
