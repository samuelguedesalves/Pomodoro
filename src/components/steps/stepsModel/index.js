import React, {useState} from 'react';

import { useHistory } from "react-router-dom";

import "./style.css";

export default function ModelSteps({
    imgSrc, 
    imgAlt, 
    imgSrcStepView, 
    textStep, 
    textTips , 
    firstButton, 
    secondButton,
    previousRoute,
    nextRoute,
    iconFirstButton,
    iconSecondButton,
}) {
    const [timingState, setTimingState] = useState(false);

    const history = useHistory();

    function jumpRoute ( route ){
        setTimingState(false);
        history.push(route);
    }

    setTimeout(()=>{
        setTimingState(true);
    }, 1000);

    if(timingState){
    return (<>
        <div className="component-container fadeInContainer ">
            <div className="image-block">
                <img src={ imgSrc } alt={ imgAlt }/>
            </div>
            <div className="view-step">
                <div className="section-tutorial">
                    
                    <button className="skipe-tutorial" >Pular</button>

                    <div className="step-view-image-block">
                        <img src={ imgSrcStepView } />
                    </div>

                    <div className="text-step">
                        <p>
                            { textStep }
                        </p>
                        <article>
                            { textTips }
                        </article>
                    </div>

                </div>

                <div className="section-button">
                    {
                        firstButton ? 
                            <button 
                                className="button" 
                                style={ secondButton? {} 
                                : { width: "70%", margin : "0 auto" } } 

                                onClick={()=>{ jumpRoute( previousRoute ) }}
                            > { secondButton ?   ( <>{iconFirstButton} {firstButton}</> ) : ( <>{firstButton} {iconFirstButton}</>) } </button>
                        :<></>
                    }
                    {
                        secondButton ? 
                            <button 
                                className="button" 
                                onClick={ () => { jumpRoute( nextRoute ) } }
                            > { secondButton } { iconSecondButton } </button>
                        :<></>
                    }
                </div>
            </div>
        </div>
    </>);
    } else {
        return <></>
    }
}
