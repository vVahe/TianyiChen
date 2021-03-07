import * as React from 'react';

function SvgMapRocket(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            id="map_rocket_svg__Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            {...props}
        >
            <defs>
                <style>
                    {
                        '.map_rocket_svg__cls-1,.map_rocket_svg__cls-2{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:1.5px}.map_rocket_svg__cls-2{stroke-linecap:round}'
                    }
                </style>
            </defs>
            <path
                className="map_rocket_svg__cls-1"
                d="M136.65 167.94c0 5.92-3.87 38.24-8.65 38.24s-8.65-32.32-8.65-38.24 3.87-8.05 8.65-8.05 8.65 2.11 8.65 8.05z"
            />
            <circle
                className="map_rocket_svg__cls-1"
                cx={128}
                cy={93.25}
                r={9.66}
            />
            <path
                className="map_rocket_svg__cls-2"
                d="M117 142.63a33.85 33.85 0 0022 0M128 49.83c0-.1-40 32.65-11 92.8"
            />
            <path
                className="map_rocket_svg__cls-2"
                d="M107.43 112.91s-23.43-1.36-8 50.2a.25.25 0 00.49 0c.87-5.41 5.1-28.8 13.28-29.2M128 49.83c0-.1 40 32.65 11 92.8"
            />
            <path
                className="map_rocket_svg__cls-2"
                d="M148.57 112.91s23.43-1.36 8 50.2a.25.25 0 01-.49 0c-.87-5.41-5.1-28.8-13.28-29.2"
            />
            <path
                className="map_rocket_svg__cls-1"
                d="M115.22 143.52V150c0 1.67 5.72 3 12.78 3s12.78-1.35 12.78-3v-6.44"
            />
            <path
                className="map_rocket_svg__cls-1"
                d="M117.35 151.7v3.52c0 1.35 4.77 2.44 10.65 2.44s10.65-1.09 10.65-2.44v-3.52M139.51 141.53c.81.5 1.27 1.06 1.27 1.66 0 2.11-5.72 3.83-12.77 3.83s-12.77-1.72-12.77-3.83c0-.6.45-1.16 1.25-1.66"
            />
        </svg>
    );
}

export default SvgMapRocket;
