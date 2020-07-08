import React from 'react';
import '../App.css';



type PropsType ={
    maxValue:number
    setMaxValue:(value:number)=>void
    setIsTouched:(IsTouched:boolean)=>void
}
function MaxValueSetter(props:PropsType) {


    function onChangeMaxValue(e:any) {
        props.setMaxValue(parseInt(e.currentTarget.value))
        props.setIsTouched(true);



    }


    return (

            <div className={'setDiv'}> Max Value: <input value={props.maxValue} onChange={onChangeMaxValue}  type="number"/></div>


    )

}

export default MaxValueSetter;
