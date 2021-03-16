import React from 'react';
import styled from 'styled-components';
import { Github, Email, LinkedIn, Twitter } from '../img/svg';

interface ISocialLinks {
    fill?: string;
}
export const SocialLinks: React.FunctionComponent<ISocialLinks> = ({
    fill,
}: ISocialLinks): JSX.Element => {
    return (
        <SocialLinksContainer>
            <SocialLinksTag target="_blank" href="">
                <Twitter className="social-links-svg" fill={fill} />
            </SocialLinksTag>
            <SocialLinksTag
                target="_blank"
                href="https://www.linkedin.com/in/nathan-scott/"
            >
                <LinkedIn className="social-links-svg" fill={fill} />
            </SocialLinksTag>
            <SocialLinksTag
                target="_blank"
                href="https://github.com/NathanScott85"
            >
                <Github className="social-links-svg" fill={fill} />
            </SocialLinksTag>
            <SocialLinksTag href="mailto:contact@nathanscott.net">
                <Email className="social-links-svg" fill={fill} />
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
