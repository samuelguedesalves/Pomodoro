import React from 'react';
import { useHistory } from 'react-router-dom';

//Icons components
import * as Icon from 'react-feather';

//css component
import './style.css';

//vector image
//import FocusedWork from '../../assets/focused_working.png';

function Welcome ({ FocusedWork }){
    const history = useHistory();
    
    function goToSteps(){
        history.push('/first-step');
    }

    return (
      <>
        <div className="content">
            <img className="fadeInContainer" style={{width: 540}} src={FocusedWork} alt="Pomodoro"/>
            <div className="welcome">
                <p className="text">
                    A técnica Pomodoro foi criada em 1980 por Francesco Cirillo, está técnica envolve o gerenciamento de tempo e tem como objetivo optimozar sua produtividade ou aprendizado, intercalando descansos de 5 minutos a cada 
                    25 minutos de trabalho.
                </p>
                
                <div >
                    <button
                    className="button" 
                    style={
                        {
                            width:240, 
                            fontWeight: 'bold',
                            margin: "15px auto",
                        }} 
                    onClick={ goToSteps } 
                    >Iniciar <Icon.ArrowRightCircle size={24} style={{marginLeft: 10}} /> </button>
                </div>

            </div>
        </div>
      </>
    );
}

export default Welcome;