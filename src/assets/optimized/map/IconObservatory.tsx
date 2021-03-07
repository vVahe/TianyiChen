import * as React from 'react';

function SvgIconObservatory(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            {...props}
        >
            <path d="M511.5 303.66l-120-69a.77.77 0 00-.36-.12V222.2a173.84 173.84 0 00-12.7-66.47 19.44 19.44 0 004.53-1c6.49-2.36 11.34-8 13.66-15.78s1.82-16.67-1.29-25.23S386.8 98 380.1 93.52s-14.1-5.67-20.61-3.31a20.18 20.18 0 00-8.49 5.94l-12.52 4.56A115.1 115.1 0 00274.23 75l-4.34-3h-.27c-2.88-.2-5.82-.3-8.74-.3-69.54 0-122.56 57.34-126.06 134.67l-20.14 7.33v-19.76a1 1 0 00-.44-.81 7.71 7.71 0 00.44-2.51c0-9.48-18.14-16.9-41.3-16.9s-41.3 7.42-41.3 16.9v53L.65 255.13c-.05 0-.08.05-.12.07a.87.87 0 00-.18.11.93.93 0 00-.13.15l-.1.11a1.46 1.46 0 00-.07.19v.35a.78.78 0 000 .21 1.55 1.55 0 00.12.22v.05a1 1 0 00.27.24l31.59 18.16v148.49c0 9.48 18.14 16.9 41.3 16.9s41.3-7.42 41.3-16.9V322.59l135.21 77.76a1 1 0 00.49.13 1 1 0 00.72-.3L511 305.59a.6.6 0 00.13-.09 1 1 0 00.37-1.84zm-201.68-1.37a305.71 305.71 0 0043.77-6.65v32.59a302.65 302.65 0 01-43.77 6.69zm45.74-8v-.11-.07a.66.66 0 00-.09-.19l-.09-.14a1.14 1.14 0 00-.16-.15l-.13-.09-.21-.07a.41.41 0 00-.16 0h-.09a.7.7 0 00-.14 0 .33.33 0 00-.1 0 302.05 302.05 0 01-45.61 7 1 1 0 00-.91 1.07.57.57 0 000 .14.78.78 0 000 .21v33.21c-13.45 1.11-27.91 1.7-42.95 1.7-35 0-67-3.15-90-8.87-21.78-5.42-34.27-12.9-34.27-20.52v-34.68c13.27 13.95 61.47 23.42 124.26 23.42s111-9.47 124.26-23.42v34.68c0 7.54-12.22 14.94-33.56 20.33v-33.37s-.05-.08-.05-.12zm35.25-49.41v19.93c0 7.62-12.66 15.1-34.74 20.52-23.31 5.72-55.7 8.87-91.19 8.87s-67.88-3.2-91.19-8.91c-22.08-5.42-34.74-12.9-34.74-20.52v-19.93l.05-.08c4.83 16.61 56.27 28.4 125.88 28.4s121.05-11.79 125.88-28.4zM329.59 137.6c2.86 7.86 7.43 14.59 12.86 18.94a28.45 28.45 0 002.33 1.65l-19 6.91c-2.67 1-6.08-.4-9.6-3.86-3.71-3.64-7-9.11-9.29-15.38s-3.27-12.58-2.77-17.76c.47-4.91 2.2-8.15 4.87-9.13l19-6.9a27.8 27.8 0 00-.71 2.76c-1.37 6.82-.55 14.91 2.31 22.77zm24 23.74a221.8 221.8 0 016.69 23.54q-8 1.22-16.29 2.22c-1.49-8.39-3.34-16.61-5.53-24.47l8.54-3.13a17.23 17.23 0 006.55 1.84zm12.94 97.74q-5.26 1.77-11.62 3.34c-7.1 1.74-15.06 3.24-23.7 4.48v-18.39a435.63 435.63 0 00-3.74-57.69 510.2 510.2 0 0033.23-4 259.87 259.87 0 015.83 55zM305 146.54c2.38 6.55 5.85 12.27 9.76 16.12 3.17 3.12 6.36 4.74 9.24 4.74a7 7 0 002.44-.43l3.75-1.36a8.38 8.38 0 01-4.59 5c-3.3 1.2-7.48-.45-11.77-4.66-4.47-4.39-8.46-11-11.21-18.53s-3.93-15.15-3.32-21.39c.58-6 2.72-9.94 6-11.14a8.39 8.39 0 016.72.87l-3.75 1.36c-3.43 1.25-5.63 5.09-6.18 10.81-.46 5.45.56 12.07 2.91 18.61zm31.5 16.77c2.14 7.72 4 15.78 5.43 24-17 2-34.94 3.26-53.69 3.85-.08-1.59-.17-3.18-.26-4.76l38.3-13.94c2.91-1.06 5.08-3.74 6.32-7.74zm-35.75-15.23c2.85 7.83 7 14.68 11.69 19.27a20.14 20.14 0 008 5.14l-32.54 11.84c-1.33-22.6-3.32-43.55-5.91-61l18.16-6.61a20.07 20.07 0 00-2.79 9c-.64 6.63.58 14.53 3.43 22.36zm13.71-33.22c-3.52-2.27-6.91-2.93-9.82-1.87l-23 8.36c-.72-4.69-1.48-9.11-2.29-13.21h.75c11.5-.2 20.64-.36 30.83-1.17 1.67 2.34 3.31 4.82 4.9 7.39zm-46-37.64c8.32 1.24 16.35 6.75 23.92 16.43-5.35.24-10.8.42-16.32.52-2.23-8.11-4.77-13.96-7.54-16.95zm42 17.28V105c-10 .79-19.06.94-30.42 1.13h-1.11c-.75-3.6-1.52-7-2.33-10 11.76-.2 23.14-.76 33.92-1.63zm7.27 19.16c-1.7-2.76-3.46-5.42-5.26-7.92v-9.6a113.81 113.81 0 0113.81 14.4zm-22.86-20.13Q286.82 82.87 278 78.31a74.34 74.34 0 0130.23 14.37q-6.54.5-13.36.85zM198.59 266.9c-8.64-1.24-16.6-2.74-23.7-4.48q-6.36-1.56-11.62-3.34v-17.23c0-83.67 38.6-153 88.42-163.52-12.82 6.68-24.56 23.08-33.91 47.81-12.38 32.7-19.19 76.16-19.19 122.37zm2-18.39c0-89.9 26-163.87 59.07-171-13.29 15.25-21.09 96.34-21.09 175v18.05c-13.57-.64-26.36-1.79-38-3.39zm40 4c0-103.91 12-174.06 23.29-175.53h.54c11.37.71 23.48 71.06 23.48 175.55v18.17a564.954 564.954 0 01-47.32-.05zm47.83-59.35c12.73-.4 25.11-1.12 37.06-2.16a434.61 434.61 0 013.73 57.51v18.66c-12 1.66-25.25 2.82-39.32 3.45v-18.11c-.03-20-.53-40.15-1.5-59.35zm40.49-83.54l-.58.21C316 94.42 301.94 83.92 287 78.72a113.09 113.09 0 0149.33 22.8 15.21 15.21 0 00-7.45 8.1zM161.28 241.85v16.54c-13.28-4.75-20.66-10.39-20.66-16.21v-20c0-74.3 42.8-132.22 102.59-143.56-46.76 16.11-81.93 83.17-81.93 163.23zm227.86-19.65v20c0 5.77-7.37 11.46-20.66 16.21v-16.56c0-28.19-4.44-56-12.83-80.52a12.69 12.69 0 003.23-.71l13.86-5.05a21.64 21.64 0 003.49.3h.1a171.57 171.57 0 0112.81 66.33zm-29-130.12a17.9 17.9 0 016.14-1.08A23.16 23.16 0 01379 95.18c6.35 4.21 11.48 11 14.45 19.18s3.42 16.68 1.26 24-6.55 12.34-12.43 14.48c-12.26 4.46-27.19-5.53-33.28-22.28-3-8.16-3.42-16.68-1.26-24s6.55-12.34 12.43-14.48zM345.83 106c-2.28 7.71-1.82 16.67 1.29 25.23 4.33 11.88 12.94 20.51 22.14 23.5l-11.06 4c-4.34 1.58-9.49.24-14.5-3.77s-9.5-10.54-12.24-18.06-3.53-15.23-2.23-21.7c1.26-6.29 4.34-10.62 8.69-12.2l11-4a28.46 28.46 0 00-3.09 7zM136.62 214.48c0-80.31 53.42-140.87 124.26-140.87 2.78 0 5.57.1 8.32.28l1.23.86c-1.84-.08-3.69-.13-5.55-.13-72 0-126.26 63.44-126.26 147.58v16.67a8.11 8.11 0 01-2-5.05zm-63.24-38.77c21.31 0 39.31 6.83 39.31 14.91s-18 14.91-39.31 14.91-39.31-6.83-39.31-14.91 18-14.91 39.31-14.91zm0 31.81c18.63 0 34-4.81 39.31-11.62v5.91c0 8.08-18 14.91-39.31 14.91s-39.31-6.83-39.31-14.91v-5.91c5.31 6.81 20.68 11.62 39.31 11.62zm0 11.19c18.63 0 34-4.81 39.31-11.62v37.14c-5.31-6.81-20.68-11.61-39.31-11.61h-.81v-4.35a1 1 0 00-1-1 84.74 84.74 0 01-21.7-3 1 1 0 00-1.23.68v.08a.94.94 0 00-.06.29v10.61c-6.94 2.1-11.92 5-14.49 8.25a.9.9 0 000-.16v-36.93c5.29 6.81 20.66 11.62 39.29 11.62zm39.31 41.94c0 8.08-18 14.9-39.31 14.9h-.81v-9.13h.81c17.67 0 32.42-4.32 38.41-10.58s0 0 0-.06c.29-.31.57-.62.82-.94zm-40.12-14.9h.81c15.85 0 30.2 3.74 36.33 9.36-6 5.41-20.19 9.32-36.33 9.32h-.81zm-2-10.09a85.26 85.26 0 01-20-2.78v-6.35a88.08 88.08 0 0020 2.72zM48.59 261c-5.12-1.61-9.06-3.66-11.54-5.92 2.52-2.31 6.47-4.33 11.54-5.93zm0-13.93c-5.65 1.71-10.07 4-12.9 6.56a6.63 6.63 0 01-1.62-4.12c0-4.38 5.41-8.63 14.52-11.49zm-14.52 7.73c.26.33.54.65.84 1 2.75 2.87 7.4 5.38 13.64 7.27v9c-8.8-2.76-14.52-6.92-14.52-11.47zm16.52-19.87a75.74 75.74 0 008.88 1.79v37.82a75.37 75.37 0 01-8.88-1.85zM61.46 237c2.95.36 6 .58 9.12.66v37.86c-3.15-.09-6.2-.32-9.12-.69zm49.61 16.66c-6.55-6-21.12-9.9-37.69-9.9h-.81v-9.14h.81c21.31 0 39.31 6.83 39.31 14.91a6.7 6.7 0 01-1.62 4.12zm-79 7c0 9.47 18.14 16.9 41.3 16.9s41.3-7.43 41.3-16.9v-44.92l20.06-7.3q-.11 3-.11 6v19.34c0 2.75 1.35 5.43 4 8v.06L137 244.2v20.57a10.21 10.21 0 001.67 5.43v37.21c0 18.18 53.1 31.38 126.26 31.38s126.25-13.2 126.25-31.38V270.2a10.12 10.12 0 001.67-5.43V244.2l-1.67-2.34v-5.12l117.52 67.58-258.28 94-168.96-97.13-78.12-44.92 28.74-10.46zM93 364.32a1 1 0 001-1v-22.41c11.1 2.67 18.66 7.37 18.66 12.6 0 8.08-18 14.91-39.31 14.91s-39.31-6.83-39.31-14.91c0-5.64 8.78-10.66 21.33-13.19v2.18a1 1 0 002 0V340a93.49 93.49 0 0116-1.34 91.4 91.4 0 0118.63 1.8v22.87a1 1 0 001 .99zm-19.65-27.7a97.43 97.43 0 00-16 1.27v-4.57a97.43 97.43 0 0016 1.27A93.54 93.54 0 0092 332.78v5.6a94.81 94.81 0 00-18.62-1.76zm0-4a93.46 93.46 0 01-16-1.35v-27.14a93.46 93.46 0 0116-1.35c2.46 0 4.92.1 7.32.27L92 309.57v21.17a91.88 91.88 0 01-18.62 1.86zm-18-1.72c-12.55-2.52-21.33-7.55-21.33-13.19S42.85 307 55.4 304.5zm21.48-30c-1.16 0-2.33-.07-3.5-.07a97.43 97.43 0 00-16 1.27v-12.45zM94 310.72l17.69 10.17c-2.4 4-9 7.32-17.69 9.41zm-60-34.48l21.38 12.29a1 1 0 00-.05.23v13.66c-10.13 2-17.87 5.55-21.33 10zm0 46.73c3.46 4.44 11.2 8 21.33 10v5.28c-10.13 2-17.87 5.55-21.33 10zm14.59 100.87c-5.12-1.61-9.06-3.65-11.54-5.92 2.52-2.3 6.47-4.33 11.54-5.92zm2-26.07a75.71 75.71 0 008.88 1.8v37.81a75.37 75.37 0 01-8.88-1.85zm10.87 2.06c2.95.35 6 .57 9.12.66v37.85c-3.15-.09-6.2-.32-9.12-.69zm11.11 8.75h.81c15.85 0 30.2 3.73 36.33 9.35-6 5.41-20.19 9.33-36.33 9.33h-.81zm38.5 7.9c-6.55-6-21.12-9.9-37.69-9.9h-.81v-9.14h.81c21.31 0 39.31 6.83 39.31 14.91a6.68 6.68 0 01-1.62 4.13zm-40.49-20v2a85.25 85.25 0 01-20-2.79v-6.35a87.52 87.52 0 0020 2.72zm-22 13.43c-5.65 1.71-10.07 4-12.9 6.57a6.67 6.67 0 01-1.62-4.13c0-4.38 5.41-8.63 14.52-11.49zm-14.51 13.57v-5.84c.26.33.54.65.84 1 2.75 2.88 7.4 5.38 13.64 7.27v9c-8.76-2.72-14.48-6.91-14.48-11.43zm78.62 0c0 8.08-18 14.91-39.31 14.91h-.81v-9.14h.81c17.68 0 32.42-4.33 38.41-10.59v-.06c.29-.31.57-.63.82-.95zm0-16.41c-5.31-6.81-20.68-11.62-39.31-11.62h-.81v-4.35a1 1 0 00-1-1 85.62 85.62 0 01-21.7-3 1 1 0 00-1.23.68v.07a1 1 0 00-.06.3v10.61c-7 2.1-12 5-14.52 8.28v-37.11c5.31 6.81 20.68 11.61 39.31 11.61s34-4.8 39.31-11.61zm0-42.43c0 8.08-18 14.91-39.31 14.91s-39.31-6.83-39.31-14.91v-5.84c5.31 6.81 20.68 11.61 39.31 11.61s34-4.8 39.31-11.61zM94 338.81v-6.46c8.73-2 15.49-5.35 18.66-9.38v25.26c-3.12-4.04-9.82-7.37-18.66-9.42z" />
            <path d="M376.07 149.23a13.47 13.47 0 004.61-.8c9.84-3.58 13.6-18.15 8.38-32.47a35 35 0 00-11.74-16.38c-5.19-3.76-10.72-4.87-15.55-3.11-9.84 3.58-13.6 18.15-8.39 32.47 4.43 12.16 13.91 20.29 22.69 20.29zm-13.62-50.89a11.65 11.65 0 014-.69 16.72 16.72 0 019.72 3.55 32.89 32.89 0 0111 15.44c4.84 13.29 1.61 26.71-7.19 29.92s-19.91-5-24.74-18.3-1.6-26.71 7.21-29.92z" />
        </svg>
    );
}

export default SvgIconObservatory;
