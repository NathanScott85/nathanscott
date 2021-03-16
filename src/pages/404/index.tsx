import React from 'react';
import styled from 'styled-components';
import { SocialLinks, Header } from '../../components';
import { Exclamation } from '../../components/img/svg';

const NotFoundPage: React.FunctionComponent = (): JSX.Element => {
    return (
        <NotFoundContainer>
            <LeftContainer>
                <h1>NS</h1>
                <SocialLinks fill={'black'} />
            </LeftContainer>
            <RightContainer>
                <Header />
                <NotFoundWrapper>
                    <Exclamation />
                    The Page you were looking for was not found.
                    <a href={'/'}>Home</a>
                    {/*using link here returns a blank page not sure why, maybe split page setup?*/}
                </NotFoundWrapper>
            </RightContainer>
        </NotFoundContainer>
    );
};

export default NotFoundPage;

const LeftContainer = styled.div`
    height: 100vh;
    width: 25%;
    background-color: #faf9f4;
    position: relative;
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

const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 2rem;
    width: 75%;
    color: #58a6ff;
    background-color: #1f2326;
    padding-left: 8vw;
    padding-bottom: 40px;
    h1 {
        line-height: 1em;
        font-family: 'Cinzel', serif;
        font-weight: 500;
        font-size: 2.4rem;
    }
    p {
        font-family: 'Open Sans', sans-serif;
    }
    a {
        color: #58a6ff;
    }
`;
const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const NotFoundWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    font-family: 'Open Sans', sans-serif;
`;
