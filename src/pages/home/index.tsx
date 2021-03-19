import React from 'react';
import styled from 'styled-components';
import {
    ContactForm,
    Header,
    SocialLinks,
    TechnicalKnowledge,
} from '../../components';
import { BurgerMenu } from '../../components/burger-menu';
import { Menu } from '../../components/burger-menu/menu';

const Home: React.FunctionComponent = (): JSX.Element => {
    const [isOpen, setOpen] = React.useState(false);

    return (
        <HomeContainer>
            <LeftContainer>
                <h1>NS</h1>
                <SocialLinks fill={'black'} />
            </LeftContainer>
            <RightContainer>
                <Header>
                    <BurgerMenu isOpen={isOpen} setOpen={setOpen} />
                    <Menu isOpen={isOpen} />
                </Header>
                <TechnicalKnowledge />
                <ContactForm />
            </RightContainer>
        </HomeContainer>
    );
};

export default Home;

const LeftContainer = styled.div`
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

const RightContainer = styled.div`
    padding: 2rem;
    color: #58a6ff;
    font-family: 'Cinzel', serif;
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
        text-decoration: none;
    }
`;

const HomeContainer = styled.div`
    display: inline-grid;
    grid-template-columns: 25% 75%;
`;
