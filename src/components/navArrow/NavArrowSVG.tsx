import * as React from 'react';

function NavArrowSVG(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            className="nav_arrow"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M120.5 52.72L71.18 91.25a11.84 11.84 0 01-13.89 0L8 52.72"
                fill="none"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={3}
                className="nav_arrow_path"
            />
        </svg>
    );
}

export default NavArrowSVG;
