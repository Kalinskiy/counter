import React, {useState} from 'react';
import '../App.css';
import StartValueSetter from "./StartValueSetter";
import MaxValueSetter from "./MaxValueSetter";
import Set from "./Set";


type PropsType = {
    SetStartValue: (value: number) => void
    SetMaxValue: (value: number) => void
    setIsTouched: (IsTouched:boolean)=>void


}

function Setter(props: PropsType) {
    let MaxValue = 5;
    let [maxValue, setMaxValue] = useState(MaxValue)
    let [startValue, setStartValue] = useState(0)

    return (

        <div className={'app'}>
            <div className={'setter'}>
                <MaxValueSetter maxValue={maxValue} setMaxValue={setMaxValue}  setIsTouched={props.setIsTouched}/>
                <StartValueSetter startValue={startValue} setStartValue={setStartValue} setIsTouched={props.setIsTouched} />
                <Set SetStartValue={props.SetStartValue}
                     SetMaxValue={props.SetMaxValue}
                     maxValue={maxValue}
                     startValue={startValue}
                     setIsTouched={props.setIsTouched}
                   />
            </div>

        </div>
    )

}

export default Setter;
