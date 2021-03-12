import React, { ReactElement } from 'react';

interface Props {
    title: string;
    subtitle: string;
    bio: string;
}

function BioPage(props: Props): ReactElement {
    return (
        <div>
            <h1>{props.title}</h1>
            <h4>{props.subtitle}</h4>
            <p>{props.bio}</p>
        </div>
    );
}

export default BioPage;
