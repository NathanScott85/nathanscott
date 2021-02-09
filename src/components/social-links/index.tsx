import React from 'react';
import styled from 'styled-components';
import { Instagram, Github, Email } from '../img';

interface ISocialLinks {
    fill?: string;
}
export const SocialLinks = ({ fill }: ISocialLinks) => {
    return (
        <SocialLinksContainer>
            <SocialLinksTag
                target="_blank"
                href="https://www.instagram.com/nathanscott285"
            >
                <Instagram className="social-links-svg" />
            </SocialLinksTag>
            <SocialLinksTag
                target="_blank"
                href="https://github.com/NathanScott85"
            >
                <Github  className="social-links-svg"/>
            </SocialLinksTag>
            <SocialLinksTag href="mailto:contact@nathanscott.net">
                <Email className="social-links-svg" />
            </SocialLinksTag>
        </SocialLinksContainer>
    );
};

const SocialLinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 300px;
    .social-links-svg:hover {
        padding-bottom: 3px;   
    }
`;

const SocialLinksTag = styled.a`
    margin: 5px 5px 0px 0px;
`;
