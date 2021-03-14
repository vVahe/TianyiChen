import * as React from 'react';

function SvgNavArrow01(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            className="nav_arrow"
            xmlns="http://www.w3.org/2000/svg"
            width={128}
            height={128}
            {...props}
        >
            <path d="M125 41.77L71.75 83.38a12.82 12.82 0 01-15 0L3.5 41.77" />
        </svg>
    );
}

export default SvgNavArrow01;
