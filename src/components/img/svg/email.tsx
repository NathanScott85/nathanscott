import React from 'react';

export interface ISVG {
    viewBox?: string;
    width?: string;
    height?: string;
    fill?: string;
    className?: string;
}

export const SVG: React.FunctionComponent<ISVG> = ({
    viewBox = '0 -3 20 20',
    width = '25px',
    height = '25px',
    fill,
    className,
}: ISVG): JSX.Element => {
    return (
        <svg
            width={width}
            height={height}
            viewBox={viewBox}
            fill="#faf9f4"
            className={className}
            version="1.1"
        >
            <path
                d="M20,10.6473214 L20,1.78571429 C20,1.29464286 19.8251488,0.874255952 19.4754464,0.524553571 C19.125744,0.17485119 18.7053571,0 18.2142857,0 L1.78571429,0 C1.29464286,0 0.874255952,0.17485119 0.524553571,0.524553571 C0.17485119,0.874255952 0,1.29464286 0,1.78571429 L0,10.6473214 C0.327380952,10.2827381 0.703125,9.95907738 1.12723214,9.67633929 C3.82068452,7.84598214 5.66964286,6.5625 6.67410714,5.82589286 C7.09821429,5.51339286 7.44233631,5.26971726 7.70647321,5.09486607 C7.97061012,4.92001488 8.32217262,4.74144345 8.76116071,4.55915179 C9.20014881,4.37686012 9.609375,4.28571429 9.98883929,4.28571429 L10,4.28571429 L10.0111607,4.28571429 C10.390625,4.28571429 10.7998512,4.37686012 11.2388393,4.55915179 C11.6778274,4.74144345 12.0293899,4.92001488 12.2935268,5.09486607 C12.5576637,5.26971726 12.9017857,5.51339286 13.3258929,5.82589286 C14.5907738,6.74107143 16.4434524,8.02455357 18.8839286,9.67633929 C19.3080357,9.96651786 19.6800595,10.2901786 20,10.6473214 L20,10.6473214 Z M20,13.9285714 C20,13.3407738 19.8177083,12.7790179 19.453125,12.2433036 C19.0885417,11.7075893 18.6346726,11.25 18.0915179,10.8705357 C15.2938988,8.92857143 13.5528274,7.71949405 12.8683036,7.24330357 C12.7938988,7.19122024 12.6357887,7.07775298 12.3939732,6.90290179 C12.1521577,6.7280506 11.9512649,6.58668155 11.7912946,6.47879464 C11.6313244,6.37090774 11.437872,6.25 11.2109375,6.11607143 C10.984003,5.98214286 10.7700893,5.88169643 10.5691964,5.81473214 C10.3683036,5.74776786 10.1822917,5.71428571 10.0111607,5.71428571 L10,5.71428571 L9.98883929,5.71428571 C9.81770833,5.71428571 9.63169643,5.74776786 9.43080357,5.81473214 C9.22991071,5.88169643 9.01599702,5.98214286 8.7890625,6.11607143 C8.56212798,6.25 8.3686756,6.37090774 8.20870536,6.47879464 C8.04873512,6.58668155 7.84784226,6.7280506 7.60602679,6.90290179 C7.36421131,7.07775298 7.20610119,7.19122024 7.13169643,7.24330357 C6.4546131,7.71949405 5.47991071,8.3984375 4.20758929,9.28013393 C2.93526786,10.1618304 2.17261905,10.6919643 1.91964286,10.8705357 C1.45833333,11.1830357 1.02306548,11.6127232 0.613839286,12.1595982 C0.204613095,12.7064732 0,13.2142857 0,13.6830357 C0,14.2633929 0.154389881,14.7470238 0.463169643,15.1339286 C0.771949405,15.5208333 1.21279762,15.7142857 1.78571429,15.7142857 L18.2142857,15.7142857 C18.6979167,15.7142857 19.1164435,15.5394345 19.4698661,15.1897321 C19.8232887,14.8400298 20,14.4196429 20,13.9285714 L20,13.9285714 Z"
                id="path6"
                fill={fill}
                transform="translate(10.000000, 7.857143) scale(1, -1) translate(-10.000000, -7.857143) "
            ></path>
        </svg>
    );
};

export default SVG;
