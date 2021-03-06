import React from 'react';
import './App.scss';
import LandingPage from './features/landingPage/LandingPage';
import { Switch } from 'react-router';
import BioPage from './features/bioPage/BioPage';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Route, useLocation } from 'react-router-dom';

const App = () => {
    const location = useLocation();

    return (
        <div className="App">
            <TransitionGroup className="transition_group">
                <CSSTransition
                    timeout={300}
                    classNames="fade"
                    key={location.key}
                >
                    <Switch location={location}>
                        <Route exact path="/bio">
                            <BioPage
                                title="Tianyi"
                                subtitle="I'm a designer"
                                bio="Cool Cool Cool Cool"
                            />
                        </Route>
                        <Route>
                            <LandingPage />
                        </Route>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
};

export default App;
