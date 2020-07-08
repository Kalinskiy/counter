import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import Setter from "./Setter/Setter";


function App() {

    let [counter, setCounter] = useState(0)
    let [maxValue, setMaxValue] = useState(5)
    let [startValue, setStartValue] = useState(0)
    let [IsTouched, setIsTouched] = useState(false)
    let MaxValue: number = maxValue;

    useEffect(() => {
        setCounter(startValue)
    }, [startValue])


    const SetStartValue = (value: number) => {
        setStartValue(value)
    }
    const SetMaxValue = (value: number) => {
        setMaxValue(value);

    }


    const IncrementCounter = () => {
        let newCounter = counter + 1;
        setCounter(newCounter);
    }
    const DecrementCounter = () => {
        let newCounter = counter - 1;
        setCounter(newCounter);
    }
    const Reset = () => {
        let newCounter = 0;
        setCounter(newCounter);
    }
    return (
        <div>
            <Setter SetStartValue={SetStartValue}
                    SetMaxValue={SetMaxValue}
                    setIsTouched={setIsTouched}/>

            <Counter incrementCounter={IncrementCounter}
                     counter={counter}
                     DecrementCounter={DecrementCounter}
                     Reset={Reset}
                     MaxValue={MaxValue}
                     startValue={startValue}
                     IsTouched={IsTouched}


            />


        </div>


    );
}

export default App;
