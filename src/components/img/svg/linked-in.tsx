import React from 'react';

export interface ISVG {
    viewBox?: string;
    width?: string;
    height?: string;
    fill?: string;
    className?: string;
}

export const SVG = ({
    viewBox = '0 0 20 20',
    width = '25px',
    fill = '#1F2326',
    className = 'contact-github',
}: ISVG): JSX.Element => {
    return (
        <svg
            width="24"
            height="23"
            viewBox="0 0 24 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.57254 2.5C5.57254 3.881 4.50882 5 3.19594 5C1.88306 5 0.819336 3.881 0.819336 2.5C0.819336 1.12 1.88306 0 3.19594 0C4.50882 0 5.57254 1.12 5.57254 2.5ZM5.59171 7H0.800049V23H5.59171V7ZM8.47998 7H13.241V9.155C15.2497 5.276 23.8 4.989 23.8 12.869V23H19.0198V14.601C19.0198 9.549 13.242 9.931 13.242 14.601V23H8.47998V7Z"
                fill="black"
            />
        </svg>
    );
};

export default SVG;
