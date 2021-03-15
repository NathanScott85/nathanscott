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
    viewBox = '0 -2 23 22',
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
                d="M23 2.309C22.1538 2.701 21.2443 2.965 20.2898 3.084C21.2645 2.475 22.0129 1.51 22.3646 0.36C21.4532 0.924 20.4432 1.334 19.3679 1.555C18.5083 0.598 17.2807 0 15.9237 0C12.8771 0 10.6385 2.966 11.3265 6.045C7.406 5.84 3.92917 3.88 1.60137 0.901C0.365125 3.114 0.96025 6.009 3.06092 7.475C2.2885 7.449 1.56017 7.228 0.924792 6.859C0.873042 9.14 2.43992 11.274 4.70925 11.749C4.04513 11.937 3.31775 11.981 2.57792 11.833C3.17783 13.789 4.92008 15.212 6.98625 15.252C5.0025 16.875 2.50317 17.6 0 17.292C2.08821 18.689 4.56933 19.504 7.2335 19.504C15.9946 19.504 20.9444 11.783 20.6454 4.858C21.5673 4.163 22.3675 3.296 23 2.309Z"
                fill={fill}
            />
        </svg>
    );
};

export default SVG;
