import React from 'react';
import { History } from 'history';
import { Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

interface IProps {
    history: History;
}

const NotFoundPage = (history: any) => {
    return <div>404 Not Found</div>;
};

const Home = (history: any) => {
    return (
        <HomeContainer>
            <LeftContainer>NS</LeftContainer>
            <RightContainer>
                <h1>
                    Under <br />
                    Construction
                </h1>
                <p>
                    I’m currently redesigning nathanscott.net and updating it
                    with my most recent projects. If you would like to see a
                    sampling of my work or are interested in starting a project
                    together, please get in touch.
                </p>
            </RightContainer>
        </HomeContainer>
    );
};
const Routes: React.FunctionComponent<IProps> = ({
    history,
}: IProps): JSX.Element => {
    return (
        <Router history={history}>
            <Switch>
                <Route
                    exact
                    path={process.env.PUBLIC_URL + '/'}
                    render={({ history }: IProps) => <Home history={history} />}
                />
                <Route
                    exact
                    path={process.env.PUBLIC_URL + '*'}
                    render={({ history }: IProps) => (
                        <NotFoundPage history={history} />
                    )}
                />
            </Switch>
        </Router>
    );
};

export default Routes;

const LeftContainer = styled.div`
    height: 100vh;
    width: 25%;
    position: relative;
    font-family: 'Tangerine', cursive;
    font-weight: 400;
    font-size: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const RightContainer = styled.div`
    height: 100vh;
    padding: 2rem;
    width: 75%;
    border-left: 2px solid lightgray;
    width: 58.333333vw;
    padding-left: 8vw;
    padding-bottom: 40px;
    h1 {
        line-height: 1em;
        font-family: 'Cinzel', serif;
        font-weight: 500;
        font-size: 2.4vw;
    }
    p {
        font-family: 'Open Sans', sans-serif;
    }
`;
const HomeContainer = styled.div`
    display: flex;
    flex-direction: row;
`;
