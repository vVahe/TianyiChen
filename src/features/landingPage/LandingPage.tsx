import LandingName from '@components/landingName/LandingName';
import React, { useState } from 'react';
import './LandingPage.scss';
import NavArrow from '@components/navArrow/NavArrow';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="landing_page">
            <LandingName name="Tianyi Chen" />
            <Link to="/bio">
                <NavArrow />
            </Link>
        </div>
    );
};

export default LandingPage;
