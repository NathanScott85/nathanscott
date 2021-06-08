import React from 'react';
import styled from 'styled-components';
import { History } from 'history';
import { Router, Switch, Route } from 'react-router-dom';
import { PageLoad } from '../components/page-load';

interface IProps {
    history: History;
}

const NotFoundPage = (history: any) => {
    return <div>404 Not Found</div>;
};

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
                    render={({ history }: IProps) => (
                        <NotFoundPage history={history} />
                    )}
                />
            </Switch>
        </Router>
    );
};

export default Routes;
