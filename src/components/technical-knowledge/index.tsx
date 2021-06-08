import React from 'react';
import styled from 'styled-components';

export const TechnicalKnowledge = () => {
    return (
        <TechnicalKnowledgeContainer>
                    <h3>Technical Knowledge</h3>
                    {vitae.map((c: any) => {
                        return (
                            <Frontend>
                                <h4>{c.title}</h4>
                                <p>{c.content}</p>
                            </Frontend>
                        );
                    })}
                    <Frontend>
                        <h4>Professional Experience:</h4>
                        <p> <a href="https://saharadigital.co.uk/" target="_blank" rel="noreferrer">Sahara Digital</a>  | Founder</p>
                        <p>
                        <a href="https://saharadigital.co.uk/" target="_blank" rel="noreferrer" >Sahara Digital</a> | Designer & Front-End JS/TS
                            Developer / Freelance
                        </p>
                        <p> <a href="https://www.williamhill.com/" target="_blank" rel="noreferrer" >William Hill</a> | Front-End JS/TS Developer</p>
                    </Frontend>
                </TechnicalKnowledgeContainer>
    )
}

const TechnicalKnowledgeContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    h3 {
        padding-top: 1rem;
    }
`;

const Frontend = styled.div`
    padding-top: 1rem;
    p {
        color: #faf9f4;
    }
`;