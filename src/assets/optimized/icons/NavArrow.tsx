import * as React from 'react';

function SvgNavArrow(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            width={100}
            height={40}
            {...props}
        >
            <path
                data-name="Path 16"
                d="M98.09 2.5L55.936 35.571a10.1 10.1 0 01-11.872 0L1.91 2.5"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={3}
            />
        </svg>
    );
}

export default SvgNavArrow;
