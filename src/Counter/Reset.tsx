import React from 'react';
import '../App.css';




type PropsType ={
    Reset:()=>void
}
function Reset(props:PropsType) {

    return (
        <button  onClick={props.Reset} > RES
        </button>
    );
}

export default Reset;
