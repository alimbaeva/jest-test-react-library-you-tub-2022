import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../store/reducer/CounterReducer";
import getCounterValue from '../../store/reducer/selectores/getCounterValue/getCounterValue';

const Counter = () => {
    const dispatch = useDispatch();
    const value = useSelector(getCounterValue);

    const onIncrement = () => {
        dispatch(increment())
    }
    const onDecrement = () => {
        dispatch(decrement())
    }
    return (
        <div>
            <h1>value = {value}</h1>
            <button onClick={onIncrement}>incriment</button>
            <button onClick={onDecrement}>idecriment</button>
        </div>
    )
}

export default Counter;