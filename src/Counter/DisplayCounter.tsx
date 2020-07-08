import React, {useState} from 'react';
import '../App.css';
import Increment from "./Increment";
import Decrement from "./Decrement";


type PropsType = {
    counter: number
    MaxValue: number
    startValue: number
    IsTouched: boolean

}

function DisplayCounter(props: PropsType) {
    
    return (
        <div>
            <div className={'display'}>
                <div className={props.counter >= props.MaxValue ? 'errorText' : 'counter'}>
                    {props.MaxValue <= props.startValue ?
                        <span className={'errorText'}>Start value should be less then Max value</span> :
                        props.IsTouched ? <span>Press set</span> : props.counter}
                </div>
            </div>


        </div>
    )

}

export default DisplayCounter;
