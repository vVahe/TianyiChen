import LandingName from '@components/landingName/LandingName';
import React, { useState } from 'react';
import './LandingPage.scss';
import NavArrow from '@components/navArrow/NavArrow';

const LandingPage = () => {
    return (
        <div className="landing_page">
            <LandingName name="Tianyi Chen" />
            <NavArrow />
        </div>
    );
};

export default LandingPage;
