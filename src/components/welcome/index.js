import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

//Icons components
import * as Icon from 'react-feather';

//css component
import './style.css';

//vector image
//import FocusedWork from '../../assets/focused_working.png';

function Welcome ({ FocusedWork }){
    
    const props = useSpring({opacity: 1, from: {opacity: 0}});
    const history = useHistory();
    
    function goToSteps(){
        history.push('/steps');
    }

    return (
      <>
        <div className="content">
            <animated.img style={props} src={FocusedWork} alt="Pomodoro"/>
            <div className="welcome"  >
                <animated.p style={props} className="text">
                    A técnica Pomodoro foi criada em 1980 por Francesco Cirillo, está técnica envolve o gerenciamento de tempo e tem como objetivo optimozar sua produtividade ou aprendizado, intercalando descansos de 5 minutos a cada 
                    25 minutos de trabalho.
                </animated.p>
                
                <animated.div style={props} >
                    <button
                    className="button" 
                    style={
                        {
                            width:240, 
                            backgroundColor: '#6C63FF', 
                            fontWeight: 'bold',
                            margin: "15px auto",
                        }} 
                    onClick={ goToSteps } 
                    >Iniciar <Icon.ArrowRightCircle size="4vh" style={{marginLeft: 10}} /> </button>
                </animated.div>

            </div>
        </div>
      </>
    );
}

export default Welcome;