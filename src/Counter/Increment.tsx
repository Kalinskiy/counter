import React, {useState} from 'react';
import '../App.css';



export type Propstype = {
    incrementCounter: ()=>void
    MaxValue:number;
    counter:number


}

function Increment(props:Propstype) {

    return (
        <button onClick={props.incrementCounter}    disabled={props.counter>=props.MaxValue}> INC
        </button>
    );
}

export default Increment;
