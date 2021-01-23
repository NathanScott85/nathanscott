import React from 'react';
import styled from 'styled-components';
import { Development } from '../../components';


const Home = (history: any) => {
    return (
        <HomeContainer>
            <LeftContainer>NS</LeftContainer>
            <RightContainer>
                <h1>
                    Nathan Scott
                </h1>
                <p>
                WHAT I DO
                </p>
              <Card>

              <div>
                <Development />
                <div>
                  <h4>Development</h4>
                  <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                </div>
              </div>
              </Card>
            </RightContainer>
        </HomeContainer>
    );
};

export default Home;

const Card = styled.div`
    padding: 20px;
    background-color: #ffffff;
    color: #1F2326;
`;
const LeftContainer = styled.div`
    width: 25%;
    background-color: #FAF9F4;
    position: relative;
    font-family: 'Tangerine', cursive;
    font-weight: 400;
    font-size: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const RightContainer = styled.div`
    padding: 2rem;
    width: 75%;
    color: #58A6FF;
    background-color: #1F2326;
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
`;
const HomeContainer = styled.div`
    display: flex;
    flex-direction: row;
`;