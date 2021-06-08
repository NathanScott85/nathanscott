import React from 'react';
import { ISVG } from './';

const SVG: React.FunctionComponent<ISVG> = ({
    width = '17px',
    viewBox = '0 0 17 20',
    fill = '#faf9f4',
    height = '24px',
    className,
}: ISVG): JSX.Element => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox={viewBox}
            fill="none"
        >
            <path
                d="M3.125 5.20833C3.125 2.33185 5.45685 0 8.33333 0C11.2098 0 13.5417 2.33185 13.5417 5.20833C13.5417 8.08482 11.2098 10.4167 8.33333 10.4167C5.45685 10.4167 3.125 8.08482 3.125 5.20833ZM8.33333 8.33333C10.0592 8.33333 11.4583 6.93422 11.4583 5.20833C11.4583 3.48244 10.0592 2.08333 8.33333 2.08333C6.60744 2.08333 5.20833 3.48244 5.20833 5.20833C5.20833 6.93422 6.60744 8.33333 8.33333 8.33333Z"
                fill={fill}
            />
            <path
                d="M2.44078 13.8991C0.877974 15.4619 0 17.5815 0 19.7917H2.08333C2.08333 18.1341 2.74181 16.5444 3.91392 15.3722C5.08602 14.2001 6.67573 13.5417 8.33333 13.5417C9.99094 13.5417 11.5806 14.2001 12.7527 15.3722C13.9249 16.5444 14.5833 18.1341 14.5833 19.7917H16.6667C16.6667 17.5815 15.7887 15.4619 14.2259 13.8991C12.6631 12.3363 10.5435 11.4583 8.33333 11.4583C6.1232 11.4583 4.00358 12.3363 2.44078 13.8991Z"
                fill={fill}
            />
        </svg>
    );
};

export default SVG;
