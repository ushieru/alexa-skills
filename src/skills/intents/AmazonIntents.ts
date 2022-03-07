import * as Alexa from 'ask-sdk-core';
import { HandlerInput } from 'ask-sdk-core';

export const SessionEndedRequest = {
    canHandle(handlerInput: HandlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput: HandlerInput) {
        console.log('Session ended');
        return handlerInput.responseBuilder.getResponse();
    },
};

export const HelpIntent = {
    canHandle(handlerInput: HandlerInput) {
        const { request } = handlerInput.requestEnvelope;

        return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput: HandlerInput) {
        const speechText = 'Puedes decir: hola mundo.';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    },
};

export const CancelAndStopIntentHandler = {
    canHandle(handlerInput: HandlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput: HandlerInput) {
        const speechText = '¡Chao! ¡Gracias por usar nuestra skill!.';

        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard('Hello World', speechText)
            .withShouldEndSession(true)
            .getResponse();
    }
};

export const UnhandledIntent = {
    canHandle() {
        return true;
    },
    handle(handlerInput: HandlerInput) {
        const speechText = 'Lo siento, no entiendo lo que quieres decir, intenta preguntarme de otra forma';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    },
};
