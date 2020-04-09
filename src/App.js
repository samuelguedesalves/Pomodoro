import React, {useState} from 'react';
import { useSpring, animated } from 'react-spring';
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';


import Logo from './assets/logo.svg';
import './App.css';


import Welcome from './components/welcome/index';
import FirstSteps from './components/firt-steps/index';
import Application from './components/application/index';

import happyImg from './assets/happy.png';

function App () {
    const props = useSpring({opacity: 1, from: {opacity: 0}});

    const [sprintHappy, setSprintHappy] = useState(false);

    function showSprintHappyBanner(state){
        setSprintHappy(state);
    }

    return (<>
        { sprintHappy ? 
            <animated.div style={props} className="happyContainer" onClick={() => showSprintHappyBanner(false)} >
                <div className="center">
                    <img src={happyImg} alt=""/>
                </div>
            </animated.div>
            : 
            <></>
        }
        <div className="App">

            <div className="header">
                <img src={Logo} alt="Pomodoro"/>
            </div>

            <div className="userAlert">
                <p>
                    Sorry! this web application is not suported in smartphone.
                </p>
            </div>

            <div className="applicationContainer" >
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Welcome} />
                        <Route path='/steps' component={FirstSteps} />
                        
                        <Route path='/app'>
                            <Application showSprintHappyBanner={showSprintHappyBanner} />
                        </Route> 

                        <Redirect to='/' />
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    </>);
}

export default App;
