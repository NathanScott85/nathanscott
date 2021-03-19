import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { BriefCase, Email, Home, Person } from '../img/svg';

export interface IProps {
    isOpen: any;
    className?: string;
}

export const Menu: React.FunctionComponent<IProps> = ({ isOpen }: IProps) => {
    return (
        isOpen && (
            <StyledMenu className="styled-menu" isOpen={isOpen}>
                <NavSpan>
                    <Home />
                </NavSpan>
                <NavSpan>
                    <Person />
                </NavSpan>
                <NavSpan>
                    <BriefCase />
                </NavSpan>
                <NavSpan>
                    <Email />
                </NavSpan>
            </StyledMenu>
        )
    );
};

const NavSpan = styled.span<{ onClick?: any }>`
    padding: 0.4rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const StyledMenu = styled.div<{ isOpen: any }>`
    z-index: 2;
    transform: ${({ isOpen }) =>
        isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    text-align: left;
    padding: 5rem 2rem;
    transition: transform 0.9s ease-in-out;
    position: absolute;
    top: 0;
    right: 20px;
`;

export const MenuLink = styled(NavLink)`
    ${({ theme }) => css`
        text-decoration: none;
        color: ${theme.colors.black};
        padding: 0 0.75em;
        &.active {
            padding-top: 2px;
            ${({ theme }) => css``};
            font-weight: 500;
        }
    `};
`;
