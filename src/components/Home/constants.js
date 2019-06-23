import { taggedTemplate } from '../utils';

export const greetingTemplate =
    taggedTemplate`I am ${'name'}, a ${'label'}, ${'description'}`;

export const errorTemplate = taggedTemplate`Error: ${0}`;