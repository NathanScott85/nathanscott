import React from 'react';
import { History } from 'history';
import { Router, Switch, Route } from 'react-router-dom';
// import { Home, About, Contact, NotFoundPage, Guides } from '../pages/';


interface IProps {
    history: History;
}

const NotFoundPage = (history: any) => {
    return (
        <div>404 Not Found</div>
    )
}
const Home = (history: any) => {
    return (
        <div>Home</div>
    );
}
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
