import React from 'react';
import styled from 'styled-components';
import { Exclamation } from '../../components/img';

const NotFoundPage = (history: any) => {
    return (
        <NotFoundContainer>
            <LeftContainer>NS</LeftContainer>
            <RightContainer>
                <Exclamation />
                The Page you were looking for was not found.
                <a href={'/'}>Home</a> {/*using link here returns a blank page not sure why, maybe split page setup?*/ }
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
    align-items: center;
    justify-content: center;
`;

const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 2rem;
    width: 75%;
    color: #58a6ff;
    background-color: #1f2326;
    border-left: 2px solid lightgray;
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
    a{ 
        color: #58a6ff; 
    }
`;
const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: row;
`;
