import React from 'react';

export interface ISVG {
    viewBox?: string;
    width?: string;
    height?: string;
    fill?: string;
}

const SVG = ({
    width = '25px',
    viewBox = '0 0 25 19',
    height = '19px',
}: ISVG) => {
    return (
        <svg width={width} height={height} viewBox={viewBox} fill="none">
            <path
                d="M25 18.4588H0V15.4412H25V18.4588ZM25 10.9147H0V7.89705H25V10.9147ZM25 3.37058H12.5V0.352936H25V3.37058Z"
                fill="#FAF9F4"
            />
        </svg>
    );
};

export default SVG;
