import React from 'react';
import styled from 'styled-components';
import { PageLoad } from '../../components/page-load';

const NotFoundPage = (history: any) => {
    return (
        <NotFoundContainer>
            <PageLoad notfound=" The Page you were looking for was not found." />
        </NotFoundContainer>
    );
};

export default NotFoundPage;

const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #faf9f4;
    font-family: 'Open Sans', sans-serif;
`;
