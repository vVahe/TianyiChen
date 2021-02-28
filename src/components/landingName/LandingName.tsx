import React from 'react';
import './LandingName.scss';

interface Props {
    name: string;
}

const LandingName = (props: Props) => {
    return (
        <div className="landing_name">
            <h1>{props.name}</h1>
        </div>
    );
};

export default LandingName;
