import React from 'react';

export interface ISVG {
    viewBox?: string;
    width?: string;
    height?: string;
    fill?: string;
}

const SVG = ({
    width = '25px',
    viewBox = '0 0 25 22',
    height = '22px',
}: ISVG) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox={viewBox}
            fill="none"
        >
            <path
                d="M10.7273 12.9545V12.5537L10.3361 12.4665L1.41926 10.4787C1.41869 10.4786 1.41812 10.4785 1.41755 10.4783C0.901811 10.3584 0.5 9.87533 0.5 9.31821V5.68184C0.5 4.99206 1.01477 4.47729 1.70454 4.47729H23.2955C23.9852 4.47729 24.5 4.99207 24.5 5.68179V9.31816C24.5 9.87534 24.0982 10.3584 23.5825 10.4783C23.5819 10.4785 23.5813 10.4786 23.5807 10.4787L14.6639 12.4665L14.2727 12.5537V12.9545V14.7727C14.2727 14.8023 14.2678 14.8189 14.2652 14.8258C14.2642 14.8285 14.2633 14.8301 14.2628 14.831C14.2619 14.8315 14.2603 14.8323 14.2576 14.8334C14.2508 14.836 14.2341 14.8409 14.2045 14.8409H10.7955C10.7659 14.8409 10.7492 14.836 10.7424 14.8334C10.7397 14.8323 10.7381 14.8315 10.7372 14.831C10.7367 14.8301 10.7358 14.8285 10.7348 14.8258C10.7322 14.819 10.7273 14.8023 10.7273 14.7727V12.9545ZM13.6364 14.7045H14.1364V14.2045V11.9318V11.4318H13.6364H11.3637H10.8637V11.9318V14.2045V14.7045H11.3637H13.6364ZM14.2727 11.8182V12.4424L14.8819 12.3061L23.5134 10.3753C24.0448 10.2661 24.3636 9.82047 24.3636 9.31816V5.68184C24.3636 5.39778 24.2668 5.12221 24.0609 4.91639C23.8551 4.71056 23.5796 4.61367 23.2955 4.61367H1.70454C1.42049 4.61367 1.14491 4.71054 0.939091 4.91635C0.733266 5.12216 0.636377 5.39774 0.636377 5.68184V9.31821C0.636377 9.8206 0.955278 10.2661 1.48653 10.3754L10.1182 12.3061L10.7273 12.4424V11.8182V11.3636C10.7273 11.334 10.7322 11.3174 10.7348 11.3105C10.7358 11.3079 10.7367 11.3062 10.7372 11.3054C10.7381 11.3048 10.7397 11.304 10.7424 11.303C10.7492 11.3003 10.7659 11.2955 10.7955 11.2955H14.2045C14.2341 11.2955 14.2508 11.3003 14.2576 11.303C14.2603 11.304 14.2619 11.3048 14.2628 11.3054C14.2633 11.3062 14.2642 11.3079 14.2652 11.3105C14.2678 11.3174 14.2727 11.334 14.2727 11.3636V11.8182ZM16.5454 1.70449V1.70454V2.27271C16.5454 2.30228 16.5405 2.31894 16.5379 2.3258C16.5369 2.32846 16.536 2.33009 16.5355 2.33098C16.5346 2.3315 16.533 2.33234 16.5303 2.33336C16.5235 2.336 16.5068 2.34087 16.4772 2.34087C16.4477 2.34087 16.431 2.336 16.4242 2.33336C16.4215 2.33234 16.4199 2.3315 16.419 2.33097C16.4185 2.33009 16.4176 2.32846 16.4166 2.3258C16.414 2.31895 16.4091 2.30229 16.4091 2.27271V1.70454C16.4091 1.42049 16.3122 1.14491 16.1064 0.93909C15.9006 0.733266 15.625 0.636377 15.3409 0.636377H9.65908C9.37503 0.636377 9.09945 0.733243 8.89363 0.93905C8.68781 1.14486 8.59092 1.42045 8.59092 1.70454V2.27271C8.59092 2.30227 8.58605 2.31892 8.58341 2.32578C8.58238 2.32845 8.58154 2.33008 8.58102 2.33097C8.58013 2.33149 8.5785 2.33233 8.57583 2.33336C8.56897 2.336 8.55232 2.34087 8.52275 2.34087C8.49318 2.34087 8.47651 2.336 8.46966 2.33336C8.467 2.33234 8.46537 2.3315 8.46448 2.33098C8.46396 2.33009 8.46312 2.32846 8.4621 2.3258C8.45946 2.31895 8.45459 2.30229 8.45459 2.27271V1.70454C8.45459 1.01477 8.96936 0.5 9.65913 0.5H15.341C16.0308 0.5 16.5455 1.01476 16.5454 1.70449ZM23.7955 12.5C23.7955 12.4705 23.8004 12.4538 23.803 12.447C23.804 12.4443 23.8049 12.4427 23.8054 12.4418C23.8063 12.4413 23.8079 12.4404 23.8105 12.4394C23.8174 12.4368 23.8341 12.4319 23.8636 12.4319C23.8932 12.4319 23.9099 12.4368 23.9168 12.4394C23.9195 12.4404 23.9211 12.4413 23.922 12.4418C23.9225 12.4427 23.9233 12.4443 23.9244 12.447C23.927 12.4538 23.9319 12.4705 23.9319 12.5V19.8864C23.9319 20.5762 23.4171 21.091 22.7273 21.091H2.27278C1.583 21.091 1.06824 20.5762 1.06824 19.8864V12.5C1.06824 12.4705 1.07311 12.4538 1.07574 12.447C1.07677 12.4443 1.07762 12.4427 1.07814 12.4418C1.07902 12.4413 1.08066 12.4404 1.08333 12.4394C1.09018 12.4368 1.10684 12.4319 1.1364 12.4319C1.16598 12.4319 1.18264 12.4368 1.1895 12.4394C1.19216 12.4404 1.19379 12.4413 1.19467 12.4418C1.1952 12.4427 1.19603 12.4443 1.19706 12.4469C1.19969 12.4538 1.20457 12.4705 1.20457 12.5V19.8864C1.20457 20.1705 1.30143 20.4461 1.50724 20.6519C1.71305 20.8577 1.98863 20.9546 2.27273 20.9546H22.7273C23.0114 20.9546 23.287 20.8577 23.4928 20.6519C23.6986 20.4461 23.7955 20.1705 23.7955 19.8864V12.5Z"
                fill="#FAF9F4"
                stroke="#FAF9F4"
            />
        </svg>
    );
};

export default SVG;
