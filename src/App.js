//-----------------MODULES DEPENDENCES-----------------------------------------
import React, {useState} from 'react';

import { useSpring, animated } from 'react-spring';

import { 
    BrowserRouter as Router, 
    Switch, 
    Route, 
    BrowserRouter, 
    Redirect,
    useHistory
} from 'react-router-dom';


//------------------CSS IMPORTS------------------------------------------------
import './App.css';



//------------------IMPORT COMPONENTS------------------------------------------
//welcome component
import Welcome from './components/welcome/index';

//Steps componet
import FirstSteps from './components/firt-steps/index';

//Aplication component
import Application from './components/application/index';


//------------------IMAGE IMPORTS----------------------------------------------
import Logo from './assets/logo.svg';
import happyImg from './assets/happy.png';

import FocusedWork from './assets/focused_working.png';

import UndrawTask from './assets/undraw_task.png';
import OfficeWork from './assets/office_work.png';
import DrinkCoffee from './assets/drinkACoffee.png';


function App () {
    const props = useSpring({opacity: 1, from: {opacity: 0}});

    const [sprintHappy, setSprintHappy] = useState(false);

    function showSprintHappyBanner(state){
        setSprintHappy(state);
    }

    return (<>
        
        { sprintHappy ? 
            <animated.div 
                style={props} 
                className="happyContainer" 
                onClick={() => showSprintHappyBanner(false)} 
            >
                <div className="center">
                    <img src={happyImg} alt=""/>
                </div>
            </animated.div>
            : 
            <></>
        }
        <div className="App" >

            <div className="header" >
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
                        <Route exact path='/'>
                            <Welcome FocusedWork={FocusedWork} />
                        </Route>

                        <Route path='/steps'>
                            <FirstSteps 
                                UndrawTask={UndrawTask} 
                                OfficeWork={OfficeWork}
                                DrinkCoffee={DrinkCoffee}
                            />
                        </Route>
                        
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
