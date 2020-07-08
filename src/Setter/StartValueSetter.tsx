import React from 'react';
import '../App.css';

type PropsType = {
    setStartValue: (value: number) => void
    startValue: number
    setIsTouched:(IsTouched:boolean)=>void

}

function StartValueSetter(props:PropsType) {
    const onChangeInput = (e:any) => {
        props.setStartValue(parseInt(e.currentTarget.value))
        props.setIsTouched( true )
    }
    return (

        <div className={'setDiv'}> Start Value:<input onChange={onChangeInput} value={props.startValue} type="number"/></div>


    )

}

export default StartValueSetter;
