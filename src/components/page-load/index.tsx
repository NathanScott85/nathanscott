import React from 'react';
import styled from 'styled-components';
import { SocialLinks } from '..';

interface IPageLoad {
    notfound?: string
}
export const PageLoad: React.FunctionComponent<IPageLoad> = ({ notfound }: IPageLoad): JSX.Element => {
    return (
        <PageLoadContainer>
            <h1>NS</h1>
            <SocialLinks fill={'black'} />
            <NotFound>{notfound}</NotFound>
        </PageLoadContainer>
    );
};

const PageLoadContainer = styled.div`
    height: 100vh;
    background-color: #faf9f4;
    font-family: 'Tangerine', cursive;
    font-weight: 400;
    font-size: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 3rem;
    }
`;

const NotFound = styled.div`
    padding: 1rem;
`;
