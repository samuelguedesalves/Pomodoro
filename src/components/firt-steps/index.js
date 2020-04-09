import React, {useState} from 'react';

import { useHistory } from 'react-router-dom';

import { animated, useSpring } from 'react-spring';

//Icons components
import * as Icon from 'react-feather';

//css component
import './style.css';

import UndrawTask from '../../assets/undraw_task.png';
import OfficeWork from '../../assets/office_work.png';
import DrinkCoffee from '../../assets/drinkACoffee.png';

import LevelSteps from '../../assets/level_steps.svg';
import LevelSteps1 from '../../assets/level_steps_1.svg';
import LevelSteps2 from '../../assets/level_steps_2.svg';

function FirstSteps () {
    const [step, setStep] = useState(0);

    //React Spring
    const props = useSpring({opacity: 1, from: {opacity: 0}})

    const history = useHistory();

    function skipNextStep(button_step){
        setStep(button_step)
    }
    
    function jumpForApp(){
        history.push('/app');
    }
    
    return(<>
        <div className="container">

            {step=== 0?
                    <animated.img style={props} src={UndrawTask} alt="Undraw Task"/>
            :
                step=== 1? 
                    <animated.img style={props} src={OfficeWork} alt="Office Work"/>
                :
                    <animated.img style={props} src={DrinkCoffee} alt="Drink a Coffee"/>
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
                        <button className='button' style={{width:240, backgroundColor: '#6C63FF', borderColor: '#6C63FF', outlineColor: '#6C63FF', marginTop:20 }} onClick={ () => skipNextStep(1) } > Proximo passo <Icon.ArrowRightCircle style={{marginLeft: 10}} /> </button>
                        :
                        step === 1?
                        <>
                            <button className='button' style={{width:240, backgroundColor: '#6C63FF', borderColor: '#6C63FF', outlineColor: '#6C63FF', marginTop:20, marginRight:20 }} onClick={ () => skipNextStep(0) } > <Icon.ArrowLeftCircle style={{marginRight: 10}} /> Passo anterior </button>
                            <button className='button' style={{width:240, backgroundColor: '#6C63FF', borderColor: '#6C63FF', outlineColor: '#6C63FF', marginTop:20 }} onClick={ () => skipNextStep(2) } > Proximo passo <Icon.ArrowRightCircle style={{marginLeft: 10}} /> </button>
                        </>
                        :
                        <>
                            <button className='button' style={{width:240, backgroundColor: '#6C63FF', borderColor: '#6C63FF', outlineColor: '#6C63FF', marginTop:20, marginRight:20 }} onClick={ () => skipNextStep(1) } > <Icon.ArrowLeftCircle style={{marginRight: 10}} /> Passo anterior </button>
                            <button className='button' style={{width:240, backgroundColor: '#6C63FF', borderColor: '#6C63FF', outlineColor: '#6C63FF', marginTop:20 }} onClick={ () => jumpForApp() } > Ir para a aplicação <Icon.Clock style={{marginLeft: 10}} /> </button>
                        </>
                    }
                </div>
            </div>
        </div>
    </>);
}

export default FirstSteps;