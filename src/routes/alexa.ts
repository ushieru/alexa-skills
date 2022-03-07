import express from 'express';
import { ExpressAdapter } from 'ask-sdk-express-adapter';
import { createSkill } from './../skills/SkillHandler';

const alexaApp = express();

const skill = createSkill();

const adapter = new ExpressAdapter(skill, false, false);

alexaApp.post('/', adapter.getRequestHandlers());

export default alexaApp
