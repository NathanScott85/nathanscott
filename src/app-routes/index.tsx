import React from 'react';
import { History } from 'history';
import { Router, Switch, Route } from 'react-router-dom';
import { NotFoundPage, Home } from '../pages';
import { PageLoad } from '../components/page-load';

interface IProps {
    history: History;
}

const Routes: React.FunctionComponent<IProps> = ({
    history,
}: IProps): JSX.Element => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path={'/'} render={() => <PageLoad />} />
                <Route
                    exact
                    path={process.env.PUBLIC_URL + '*'}
                    render={() => <NotFoundPage />}
                />
            </Switch>
        </Router>
    );
};

export default Routes;
