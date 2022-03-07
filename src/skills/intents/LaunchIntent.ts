import { HandlerInput } from 'ask-sdk-core';

export const LaunchRequest = {
    canHandle(handlerInput: HandlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput: HandlerInput) {
        const speechText = 'Hola, bienvenido a Alexa skills.';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();

    },
};
