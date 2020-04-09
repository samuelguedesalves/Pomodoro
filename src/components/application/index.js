import React, { useEffect, useState } from 'react';

//icons
import * as Icon from 'react-feather';

import './style.css';

function Application ({ showSprintHappyBanner }) {
    const [minute, setMinute] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [state, setState] = useState(false);
    const [strokeOffset, setStrokeOffset] = useState(1500);
    const [clean,setClean] = useState(false);

    useEffect(()=>{
        if(state === true){
            if( seconds <= 60){
                setTimeout(()=>{
                    setSeconds( seconds + 1 );
                    setStrokeOffset( strokeOffset - 1.13 );
                }, 1000);
            }else{
                if( minute === 24 ){
                    setState(false);
                    showSprintHappyBanner(true);
                    resetTimer();
                }
                setMinute(minute + 1);
                setSeconds(0);
            }
        }else if(clean === true){
            setStrokeOffset(1500);
            setMinute(0);
            setSeconds(0);
            setClean(false);
        }
    }, [seconds, state, clean]);



    function countNumberCase(number){
        var length = 1;
        
        while( (number = number / 10.0) >= 1 ){
            length ++;
        }

        return length;
    }

    //this function pause time
    function pauseTimer () {
        setState(false);
    }

    //this function is responsible to clean timer
    function resetTimer() {
        setState(false);
        setClean(true);
    }

    return (
        <>
            <div className="application">
                <div className="timer">
                    <svg width="300" height="300" className="canvasCircle" >
                        <circle className="circle" style={ {strokeDashoffset: `${strokeOffset}` } } cx="150" cy="150" r="140" stroke="#4E49A9" strokeLinecap="round" strokeWidth={20} fillOpacity="0" />
                    </svg> 

                    <span className="display" >{
                        countNumberCase(minute) === 1 ? "0" + minute : minute
                    }:{
                        countNumberCase(seconds) === 1 ? "0" + seconds : seconds
                    }</span>
                </div>

                <div className="panel">
                    <div className="sprintsCounter">
                        <h5>Sprints</h5>
                        <div className="counter">
                            <h5>0</h5>
                        </div>
                    </div>

                    <div className="controllers">
                        <button 
                            className="button"
                            onClick={ () => setState(true) }
                            style={ state ? {
                                backgroundColor: '#999',
                                borderStyle: "dashed",
                                borderWidth : 4,
                                borderColor: '#727272',
                                color: '#727272',
                                marginBottom: 20, 
                                pointerEvents: "none",
                                cursor: "not-allowed",
                            } : {
                                marginBottom: 20, 
                                backgroundColor: "#80E367",
                            }} 
                        > { minute !== 0 || seconds !== 0 ? 'Return' : 'Start' } < Icon.PlayCircle style={{marginLeft: 10}} /> </button>

                        
                        <button 
                            className="button" 
                            style={ state ? {
                                backgroundColor: '#FF5454', 
                                borderColor: '#FF5454', 
                                marginBottom: 20
                            } : {
                                backgroundColor: '#999',
                                borderStyle: "dashed",
                                borderWidth : 4,
                                borderColor: '#727272',
                                color: '#727272',
                                marginBottom: 20, 
                                pointerEvents: "none",
                                cursor: "not-allowed",
                            }}
                            onClick={ pauseTimer } 
                        >Pause < Icon.PauseCircle style={{marginLeft: 10}} /> </button>

                        <button 
                            className="button" 
                            style={ state ? {
                                backgroundColor: '#999',
                                borderStyle: "dashed",
                                borderWidth : 4,
                                borderColor: '#727272',
                                color: '#727272',
                                marginBottom: 20, 
                                pointerEvents: "none",
                                cursor: "not-allowed",
                            } : {
                                backgroundColor: '#666', 
                                borderColor: '#666'
                            }} 
                            onClick={resetTimer} 
                        >Reset < Icon.RefreshCcw style={{marginLeft: 10}} /> </button>

                    </div>

                    <div className="ads">
                        <h6>
                            ADS
                        </h6>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Application;