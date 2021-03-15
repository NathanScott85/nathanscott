import React from 'react';

export interface ISVG {
    viewBox?: string;
    width?: string;
    height?: string;
    fill?: string;
    className: string;
}

const SVG = ({
    width = '24px',
    viewBox = '0 0 24 23',
    fill = '#faf9f4',
    height = '24px',
    className,
}: ISVG) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox={viewBox}
            fill={fill}
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.57254 2.5C5.57254 3.881 4.50883 5 3.19595 5C1.88308 5 0.819366 3.881 0.819366 2.5C0.819366 1.12 1.88308 0 3.19595 0C4.50883 0 5.57254 1.12 5.57254 2.5ZM5.59171 7.00003H0.800049V23H5.59171V7.00003ZM8.48001 6.99999H13.241V9.15499C15.2497 5.27599 23.8 4.98899 23.8 12.869V23H19.0198V14.601C19.0198 9.54899 13.242 9.93099 13.242 14.601V23H8.48001V6.99999Z"
                fill={fill}
            />
        </svg>
    );
};

export default SVG;
