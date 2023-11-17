import {useState} from "react";
import {Button} from "./Button";

export const Counter = () => {


    const minValue = 0
    const maxValue = 5

    const [count, setCount] = useState(minValue)

    const minDis = count === minValue
    const maxDis = count === maxValue

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }

    return (
        <div>
            <h1>{count}</h1>
            <Button onClick={increment} disabled={maxDis} title='+'/>
            {/*<button onClick={increment} disabled={maxDis}>inc</button>*/}
            <Button onClick={decrement} disabled={minDis} title='-'/>

            <Button onClick={reset} disabled={minDis} title='o'/>
        </div>
    )

}