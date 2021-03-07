import * as React from 'react';

function SvgMap(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            id="map_svg__Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            {...props}
        >
            <defs>
                <style>
                    {
                        '.map_svg__cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3px}'
                    }
                </style>
            </defs>
            <path
                className="map_svg__cls-1"
                d="M79.79 124V42.67M79.79 42.67l43.07-26a.75.75 0 011.14.64v79.6a.75.75 0 01-.36.64L79.79 124M48.21 85.33L5.06 104.85a.74.74 0 01-1.06-.68V24.48a.75.75 0 01.44-.68L48.21 4M48.21 4v81.33M79.79 42.67L48.21 4M79.79 124L48.21 85.33"
            />
        </svg>
    );
}

export default SvgMap;
