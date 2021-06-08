import React from 'react';
import { ISVG } from './';

export const SVG: React.FunctionComponent<ISVG> = ({
    viewBox = '0 0 20 20',
    width = '25px',
    fill = '#faf9f4',
    className = 'contact-github',
}: ISVG): JSX.Element => {
    return (
        <svg
            width={width}
            height="25px"
            className={className}
            viewBox={viewBox}
            version="1.1"
        >
            <path
                d="M10,0.297 C4.475,0.297 0,4.7745 0,10.297 C0,14.7161667 2.865,18.4636667 6.8375,19.7845 C7.3375,19.8786667 7.52083333,19.5695 7.52083333,19.3036667 C7.52083333,19.0661667 7.5125,18.437 7.50833333,17.6036667 C4.72666667,18.207 4.14,16.262 4.14,16.262 C3.685,15.1078333 3.0275,14.7995 3.0275,14.7995 C2.12166667,14.1795 3.0975,14.192 3.0975,14.192 C4.10166667,14.262 4.62916667,15.222 4.62916667,15.222 C5.52083333,16.7511667 6.97,16.3095 7.54166667,16.0536667 C7.63166667,15.407 7.88916667,14.9661667 8.175,14.7161667 C5.95416667,14.4661667 3.62,13.6061667 3.62,9.7745 C3.62,8.68283333 4.0075,7.79116667 4.64916667,7.09116667 C4.53666667,6.83866667 4.19916667,5.822 4.73666667,4.4445 C4.73666667,4.4445 5.57416667,4.17616667 7.48666667,5.4695 C8.28666667,5.247 9.13666667,5.137 9.98666667,5.132 C10.8366667,5.137 11.6866667,5.247 12.4866667,5.4695 C14.3866667,4.17616667 15.2241667,4.4445 15.2241667,4.4445 C15.7616667,5.822 15.4241667,6.83866667 15.3241667,7.09116667 C15.9616667,7.79116667 16.3491667,8.68283333 16.3491667,9.7745 C16.3491667,13.6161667 14.0116667,14.462 11.7866667,14.7078333 C12.1366667,15.0078333 12.4616667,15.6211667 12.4616667,16.5578333 C12.4616667,17.8961667 12.4491667,18.9711667 12.4491667,19.2961667 C12.4491667,19.5586667 12.6241667,19.8711667 13.1366667,19.7711667 C17.1375,18.4595 20,14.7095 20,10.297 C20,4.7745 15.5225,0.297 10,0.297"
                fill={fill}
            ></path>
        </svg>
    );
};

export default SVG;
