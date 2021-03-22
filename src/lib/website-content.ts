import { Person, BriefCase, Email, Home } from '../components/img/svg';

export const vitae = [
    {
        id: 1,
        title: 'Frontend:',
        content: 'HTML, CSS, Styled Components, Javascript, Typescript',
    },
    {
        id: 2,
        title: 'Frameworks:',
        content:
            'React, Bootstrap, Express.js, Nest.js,  Apollo-Server(GraphQL)',
    },
    {
        id: 3,
        title: 'Design:',
        content: 'Figma',
    },
];

export const svg = [
    { id: '1', Component: Home, name: 'TechnicalKnowledge' },
    {
        id: '2',
        Component: Person,
        name: 'AboutMe',
    },
    {
        id: '3',
        Component: BriefCase,
        name: 'Portfolio',
    },
    {
        id: '4',
        Component: Email,
        name: 'ContactForm',
    },
];
