import * as Alexa from 'ask-sdk-core';
import { CancelAndStopIntentHandler, HelpIntent, SessionEndedRequest, UnhandledIntent } from './intents/AmazonIntents';
import { LaunchRequest } from './intents/LaunchIntent';
import { HelloWorldIntent } from './intents/HelloWorldIntent';

export const createSkill = () => {
    const skillbuilder = Alexa.SkillBuilders.custom();
    return skillbuilder.addRequestHandlers(
        LaunchRequest,
        HelloWorldIntent,
        SessionEndedRequest,
        HelpIntent,
        CancelAndStopIntentHandler,
        UnhandledIntent
    )
        .withApiClient(new Alexa.DefaultApiClient())
        .withCustomUserAgent('prueba/v1')
        .create()
}
