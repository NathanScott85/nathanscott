import React from 'react';
import styled from 'styled-components';

export interface IProps {
    isOpen: any;
    setOpen: any;
    className?: string;
}

export const BurgerMenu: React.FunctionComponent<IProps> = ({
    isOpen,
    setOpen,
}: IProps): JSX.Element => {
    return (
        <StyledBurger
            className="burger-menu"
            isOpen={isOpen}
            onClick={() => setOpen(!isOpen)}
        >
            <div />
            <div />
            <div />
        </StyledBurger>
    );
};

const StyledBurger = styled.button<{ isOpen: any }>`
    position: absolute;
    top: 3.5%;
    right: ${({ isOpen }) => (isOpen ? '2.3%' : '2.5%')};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
    color: white;

    &:focus {
        outline: none;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background: ${({ isOpen }) => (isOpen ? '#faf9f4' : '#faf9f4')};
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
        :first-child {
            transform: ${({ isOpen }) =>
                isOpen ? 'rotate(45deg)' : 'rotate(0)'};
            width: ${({ isOpen }) => (isOpen ? '2rem' : '1rem')};
            left: ${({ isOpen }) => (isOpen ? '0' : '1rem')};
        }

        :nth-child(2) {
            opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
            transform: ${({ isOpen }) =>
                isOpen ? 'translateX(20px)' : 'translateX(0)'};
        }

        :nth-child(3) {
            transform: ${({ isOpen }) =>
                isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;
