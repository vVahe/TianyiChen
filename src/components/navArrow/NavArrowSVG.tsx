import * as React from 'react';

function NavArrowSVG(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            className="nav_arrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 40"
            {...props}
        >
            <path d="M98.09 2.5L55.936 35.571a10.1 10.1 0 01-11.872 0L1.91 2.5" />
        </svg>
    );
}

export default NavArrowSVG;
