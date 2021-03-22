import React from 'react';
import styled from 'styled-components';
import { IComponentProps } from '../../lib/interfaces';
import { vitae } from '../../lib/website-content';

export const TechnicalKnowledge: React.FunctionComponent<IComponentProps> = ({
    componentType = 'TechnicalKnowledge',
    currentComponent,
}: IComponentProps): JSX.Element => {
    const isVisible = currentComponent == componentType;
    return (
        <TechnicalKnowledgeContainer isVisible={isVisible}>
            <h3>Technical Knowledge</h3>
            {vitae.map((c: any) => {
                return (
                    <Frontend key={c.id}>
                        <h4>{c.title}</h4>
                        <p>{c.content}</p>
                    </Frontend>
                );
            })}
            <Frontend>
                <h4>Professional Experience:</h4>
                <p>
                    <a
                        href="https://saharadigital.co.uk/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Sahara Digital
                    </a>
                    | Founder
                </p>
                <p>
                    <a
                        href="https://saharadigital.co.uk/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Sahara Digital
                    </a>
                    | Designer & Front-End JS/TS Developer / Freelance
                </p>
                <p>
                    <a
                        href="https://www.williamhill.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        William Hill
                    </a>
                    | Front-End JS/TS Developer
                </p>
            </Frontend>
        </TechnicalKnowledgeContainer>
    );
};

const TechnicalKnowledgeContainer = styled.div<{
    isVisible: any;
}>`
    ${({ isVisible }) => (isVisible ? 'display: flex' : 'display: none')};

    flex-direction: column;
    justify-content: space-evenly;
    h3 {
        padding-top: 1rem;
        padding-top: 1rem;
    }
    margin: 20% 20% 0% 0%;
`;

const Frontend = styled.div`
    padding-top: 1rem;
    p {
        color: #faf9f4;
    }
`;
