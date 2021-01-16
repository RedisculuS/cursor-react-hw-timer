import React, {useState, useEffect} from 'react';

function Timer({time, step, autostart}) {
    const [counter, setCounter] = useState(time)
    const [start, setStart] = useState(autostart);
    const interval = step / 1000;
            
    useEffect(() => {
        const timer = setTimeout(() =>{
            if(counter > 0 && start === true){
                setCounter(counter-interval)
        }}, step)
        return timer;
    });

    return (
        <div className="timer-wrapper">
            <div className="buttons">
                <button  onClick = {() => {
                    setStart(true);
                    if(counter === 0 ){
                        setCounter(time) 
                    }
                }}>
                <span className="text"> Start </span>
                </button> 
                <button onClick = {() => {
                    setStart(false)
                }}
                >
                <span className="text"> Stop </span>
                </button>
        </div>
        <div className="time-info"> {counter === 0 ? "It`s over, one more time?" : counter} </div>
    </div>
    )
}

export default Timer;