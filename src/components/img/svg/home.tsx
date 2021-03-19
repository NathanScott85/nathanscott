import React from 'react';
import { ISVG } from './';

const SVG: React.FunctionComponent<ISVG> = ({
    width = '25px',
    viewBox = '0 0 25 24',
    height = '24px',
}: ISVG): JSX.Element => {
    return (
        <svg width={width} height={height} viewBox={viewBox} fill="none">
            <path
                d="M0 12.1668L11.6163 0.371619C12.1044 -0.123873 12.8956 -0.123873 13.3837 0.371619L25 12.1668H22.5V22.3207C22.5 23.0217 21.9404 23.59 21.25 23.59H15V14.7053H10V23.59H3.75C3.05964 23.59 2.5 23.0217 2.5 22.3207V12.1668H0Z"
                fill="#FAF9F4"
            />
        </svg>
    );
};

export default SVG;
