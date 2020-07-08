import React from 'react';
import '../App.css';




type PropsType ={
    DecrementCounter:()=>void
    counter:number

}
function Decrement(props:PropsType) {

    return (
        <button disabled={props.counter<=0} onClick={props.DecrementCounter}> DEC
        </button>
    );
}

export default Decrement;
