import React from 'react';
import '../App.css';


type PropsType = {
    SetStartValue: (value: number) => void
    SetMaxValue: (value: number) => void
    maxValue:number
    startValue:number
    setIsTouched:(Istouched:boolean)=>void

}

function Set(props: PropsType) {
    const onClick = () => {
        props.SetStartValue(props.startValue);
        props.SetMaxValue(props.maxValue);
        props.setIsTouched(false);


    }
    return (
        <div className={'setBtn'}>
            <button onClick={onClick} > SET
            </button>

        </div>
    )

}

export default Set;
