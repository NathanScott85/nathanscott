import React from 'react';
import { SocialLinks } from '..';

export const Header: React.FunctionComponent = (): JSX.Element => {
    return (
        <header>
            <h1>Nathan Scott</h1>
            <p>Front End Developer and Mentor</p>
            <SocialLinks />
        </header>
    );
};
