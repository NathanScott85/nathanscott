import React from 'react';
import { SocialLinks } from '..';

interface IProps {
    children?: React.ReactNode;
}
export const Header: React.FunctionComponent = ({
    children,
}: IProps): JSX.Element => {
    return (
        <header>
            <h1>Nathan Scott</h1>
            <p>Front End Developer, Designer and Mentor</p>
            <SocialLinks />
            {children}
        </header>
    );
};
