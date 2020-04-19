import React, {useState} from 'react';

import { 
    BrowserRouter as Router ,
    Switch, 
    Route,
    useHistory,
    Redirect,
    BrowserRouter,
} from 'react-router-dom';

//Icons components
import * as Icon from 'react-feather';

//css component
//import './style.css';

//import UndrawTask from '../../assets/undraw_task.png';
//import OfficeWork from '../../assets/office_work.png';
//import DrinkCoffee from '../../assets/drinkACoffee.png';

import ModelSteps from './stepsModel/index';

import LevelSteps from '../../assets/level_steps.svg';
import LevelSteps1 from '../../assets/level_steps_1.svg';
import LevelSteps2 from '../../assets/level_steps_2.svg';

export default function Steps ({ UndrawTask, OfficeWork, DrinkCoffee }) {
    
    return(
            <BrowserRouter>
                <Switch>
                    <Route path="/second" >
                        <h1>Second</h1>
                    </Route>
                    <Route path="/first">
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
                            textTipes={
                                `
                                    Importante: se a tarefa que for realizar for muito complexa ou grande tente subdividila
                                    `
                            } 
                            firstButton={"Proximo"} 
                            secondButton={false} 
                        />
                    </Route>
                </Switch>
            </BrowserRouter>
    );
}









/*
<div className="container">

    {step=== 0?
            <img className="image-slide fadeInContainer" src={UndrawTask} alt="Undraw Task"/>
    :
        step=== 1? 
            <img className="image-slide fadeInContainer" src={OfficeWork} alt="Office Work"/>
        :
            <img className="image-slide" src={DrinkCoffee} alt="Drink a Coffee"/>
    }

    <div className="guide">
        <div className="skip_button">
            <a 
                className="skip"
                onClick={jumpForApp}
            >Pular</a>
        </div>

        <div className="view_level_steps" >
            {step === 0?
                <img src={LevelSteps} alt=""/>                    
            :
                step === 1?
                <img src={LevelSteps1} alt=""/>
                :
                <img src={LevelSteps2} alt=""/>

            }
        </div>

        <p className='text_step'>
            {step === 0?
                    `
                        Primeiro faça uma lista das tarefas
                        que deveram ser realizadas. Organização
                        é muito importante, economiza tempo e
                        energia durante o trabalho.
                    `
                :
                    step === 1?
                        `
                            Agora com tudo organizado é hora de
                            colocar a mão na massa, se concentre
                            e faça sua tarefa durante os proximos
                            25 minutos.
                        `
                    :
                        `
                        A hora do descanso chegou!
                        após os 25 minutos trabalhados você
                        pode pausar durante os proximos 5 minutos, perfeito para um café.
                        `
                    
            }
        </p>
        <div className="tips">
            <p>
                {step === 0?
                    `
                        Importante: se a tarefa que for realizar for muito complexa ou grande tente subdividila
                    `
                :
                    step === 1?
                        `
                            Importante: Tente terminar sua tarefa dentros dos 25 minutos.
                        `
                    :
                        `
                        Importante: Respire um ar fresco, faça um café e aproveite, a proxima pausa será só há 25 minutos.
                        `
                }
            </p>
        </div>
        <div className="next">
            {step === 0?
                <button 
                    className='button' 
                    style={{
                        width:240, 
                        backgroundColor: '#6C63FF', 
                        borderColor: '#6C63FF', 
                        outlineColor: '#6C63FF', 
                        marginTop:20 }} 
                    onClick={ () => skipNextStep(1) } 
                > 
                    Proximo passo 
                    <Icon.ArrowRightCircle size="4vh" style={{marginLeft: 10}} /> 
                </button>
                :
                step === 1?
                <>
                    <button 
                        className='button' 
                        style={{
                            width:240, 
                            backgroundColor: '#6C63FF', 
                            borderColor: '#6C63FF', 
                            outlineColor: '#6C63FF', 
                            marginTop:20, 
                            marginRight:20 }} 
                            onClick={ () => skipNextStep(0) } 
                    >   
                        <Icon.ArrowLeftCircle size="4vh" style={{marginRight: 10}} /> 
                        Passo anterior 
                    </button>
                    
                    <button 
                        className='button' 
                        style={{
                            width:240, 
                            backgroundColor: '#6C63FF', 
                            borderColor: '#6C63FF', 
                            outlineColor: '#6C63FF', 
                            marginTop:20 }} 
                        onClick={ () => skipNextStep(2) } 
                    > 
                        Proximo passo 
                        <Icon.ArrowRightCircle size="4vh" style={{marginLeft: 10}} /> 
                    </button>
                </>
                :
                <>
                    <button 
                        className='button' 
                        style={{
                            width:240, 
                            backgroundColor: '#6C63FF', 
                            borderColor: '#6C63FF', 
                            outlineColor: '#6C63FF', 
                            marginTop:20, 
                            marginRight:20 }} 
                        onClick={ () => skipNextStep(1) } 
                    > 
                        <Icon.ArrowLeftCircle size="4vh" style={{marginRight: 10}} /> 
                        Passo anterior 
                    </button>

                    <button 
                        className='button' 
                        style={{
                            width:240, 
                            backgroundColor: '#6C63FF', 
                            borderColor: '#6C63FF', 
                            outlineColor: '#6C63FF', 
                            marginTop:20 }} 
                        onClick={ () => jumpForApp() } 
                    >
                        Ir para a aplicação 
                        <Icon.Clock size="4vh" style={{marginLeft: 10}} /> 
                    </button>
                </>
            }
        </div>
    </div>
</div>
*/