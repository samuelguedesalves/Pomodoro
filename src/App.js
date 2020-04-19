//-----------------MODULES DEPENDENCES-----------------------------------------
import React, {useState} from 'react';

import { 
    BrowserRouter as Router, 
    Switch, 
    Route, 
    BrowserRouter, 
    Redirect,
} from 'react-router-dom';

import * as Icon from "react-feather";


//------------------CSS IMPORTS------------------------------------------------
import './App.css';



//------------------IMPORT COMPONENTS------------------------------------------
//welcome component
import Welcome from './components/welcome/index';

//step model component
import ModelSteps from './components/steps/stepsModel'

//Aplication component
import Application from './components/application/index';


//------------------IMAGE IMPORTS----------------------------------------------
import Logo from './assets/logo.svg';
import happyImg from './assets/happy.png';

import FocusedWork from './assets/focused_working.png';

import UndrawTask from './assets/undraw_task.png';
import OfficeWork from './assets/office_work.png';
import DrinkCoffee from './assets/drinkACoffee.png';

import LevelSteps from './assets/level_steps.svg';
import LevelSteps1 from './assets/level_steps_1.svg';
import LevelSteps2 from './assets/level_steps_2.svg';



function App () {
    const [sprintHappy, setSprintHappy] = useState(false);

    function showSprintHappyBanner(state){
        setSprintHappy(state);
    }

    return (<>
        
        { sprintHappy ? 
            <div
                className="happyContainer" 
                onClick={() => showSprintHappyBanner(false)} 
            >
                <div className="center">
                    <img src={happyImg} alt=""/>
                </div>
            </div>
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

                        <Route path = "/first-step">
                            <ModelSteps
                                imgSrc={UndrawTask} 
                                imgAlt={"Undraw Task"} 
                                imgSrcStepView={LevelSteps} 
                                textStep={
                                    `
                                        Primeiro faça uma lista das tarefas
                                        que deveram ser realizadas. Organização
                                        é muito importante, economiza tempo e
                                        energia durante o trabalho.
                                    `
                                } 
                                textTips={
                                    `
                                        Importante: se a tarefa que for realizar for muito complexa ou grande tente subdividi-la
                                    `
                                } 
                                firstButton={"Próximo"}
                                secondButton={false}
                                previousRoute={"/second-step"}
                                iconFirstButton={<Icon.ArrowRightCircle size="30px" style={{marginLeft: 10}} />}
                            />
                        </Route>

                        <Route path='/second-step'>
                            <ModelSteps
                                imgSrc={OfficeWork} 
                                imgAlt={"Office Work"} 
                                imgSrcStepView={LevelSteps1} 
                                textStep={
                                    `
                                        Agora com tudo organizado é hora de
                                        colocar a mão na massa, se concentre
                                        e faça sua tarefa durante os proximos
                                        25 minutos.
                                    `
                                } 
                                textTips={
                                    `
                                    Importante: Tente terminar sua tarefa dentros dos 25 minutos.
                                    `
                                } 
                                firstButton={"Anterior"} 
                                secondButton={"Proximo"}
                                previousRoute={"/first-step"}
                                nextRoute={"/third-step"}
                                iconFirstButton={<Icon.ArrowLeftCircle size="30px" style={{marginRight: 10}} /> }
                                iconSecondButton={<Icon.ArrowRightCircle size="30px" style={{marginLeft: 10}} /> }
                            />  
                        </Route>
                        
                        <Route path='/third-step'>
                            <ModelSteps
                                imgSrc={DrinkCoffee} 
                                imgAlt={"Drink Coffee"} 
                                imgSrcStepView={LevelSteps2} 
                                textStep={
                                    `
                                        A hora do descanso chegou!
                                        após os 25 minutos trabalhados você
                                        pode pausar durante os proximos 5 minutos, perfeito para um café.
                                    `
                                } 
                                textTips={
                                    `
                                        Importante: Respire um ar fresco, faça um café e aproveite, a proxima pausa será só há 25 minutos.
                                    `
                                } 
                                firstButton={"Anterior"} 
                                secondButton={"Concluir"}
                                previousRoute={"/second-step"}
                                nextRoute={"/app"}
                                iconFirstButton={<Icon.ArrowLeftCircle size="30px" style={{marginRight: 10}} />}
                                iconSecondButton={ <Icon.Clock size="30px" style={{marginLeft: 10}} /> }
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
