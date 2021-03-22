import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { menu } from '../../lib/website-content';
import { SVG } from '../../lib/interfaces/index';
import { ReactElement } from 'react';

export interface IProps {
    isOpen: any;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setCurrentComponent: (newCurrentComponent: string) => void;
    className?: string;
}

export const Menu: React.FunctionComponent<IProps> = ({
    isOpen,
    setOpen,
    setCurrentComponent,
}: IProps) => {
    const onClick = (componentName: string, isOpen: boolean) => {
        setCurrentComponent(componentName);
        setOpen(isOpen);
    };

    return (
        isOpen && (
            <StyledMenu className="styled-menu" isOpen={isOpen}>
                {menu.map((Component: SVG) => {
                    return (
                        <NavSpan
                            key={Component.id}
                            onClick={() => onClick(Component.name, false)}
                        >
                            <Component.SVG />
                        </NavSpan>
                    );
                })}
            </StyledMenu>
        )
    );
};

const NavSpan = styled.span<{ onClick?: () => void }>`
    padding: 0.4rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledMenu = styled.div<{ isOpen: boolean }>`
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
