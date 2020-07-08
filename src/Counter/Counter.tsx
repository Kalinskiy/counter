import React from 'react';
import '../App.css';
import Increment from "./Increment";
import Decrement from "./Decrement";
import DisplayCounter from "./DisplayCounter";
import Reset from "./Reset";


type PropsType = {
    incrementCounter: ()=>void
    counter: number
    DecrementCounter:()=>void
    Reset:()=>void
    MaxValue:number
    startValue:number
    IsTouched:boolean

}

function Counter(props:PropsType) {
    return (
        <div className={'app'}>
        <div className={'counter'}>
            <DisplayCounter counter={props.counter} MaxValue={props.MaxValue} startValue={props.startValue} IsTouched={props.IsTouched}   />
            <Increment incrementCounter={props.incrementCounter} MaxValue={props.MaxValue} counter={props.counter}/>
            <Decrement DecrementCounter={props.DecrementCounter} counter={props.counter} />
            <Reset Reset={props.Reset}/>
        </div>
    </div>
    )

}

export default Counter;
