import React from 'react';
import { History } from 'history';
import { Router, Switch, Route } from 'react-router-dom';
import { NotFoundPage, Home } from '../pages';

interface IProps {
    history: History;
}

const Routes: React.FunctionComponent<IProps> = ({
    history,
}: IProps): JSX.Element => {
    return (
        <Router history={history}>
            <Switch>
                <Route
                    exact
                    path={'/'}
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
