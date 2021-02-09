import React, { useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import styled from 'styled-components';
import {
    SocialLinks
} from '../../components';

const Home: React.FunctionComponent = (): JSX.Element => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [currentComponent, setCurrentComponent] = useState(
        'TechnicalKnowledge',
    );
    const onClick = (newCurrentComponent: string) => {
        setCurrentComponent(newCurrentComponent);
    };
    return (
        <HomeContainer>
            <RightContainer>
                <h1>Nathan Scott</h1>
                <p>Front End Developer and Mentor</p>
                <SocialLinks />
            </RightContainer>
        </HomeContainer>
    );
};

export default Home;

const LeftContainer = styled.div`
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
    a {
        color: #58a6ff;
        text-decoration: none;
    }
`;

const HomeContainer = styled(Container)`
    /* display: inline-grid; */
    /* grid-template-columns: 25% 75%; */
`;