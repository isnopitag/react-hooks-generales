import React, { useCallback, useState } from 'react'
import '../02-useEffect/counter.css'
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);

    
    // const increment = () =>{
    //     setCounter(counter + 1);
    // }

   const increment = useCallback(
        (num) => {
            setCounter( c => c + num);
        },
        [setCounter],
    )

    // useEffect(() => {
    //     effect
    //     return () => {
            
    //     }
    // }, [increment])

    return (
        <div>
            <h1>UseCallback hook: { counter }</h1>
            <hr />
            <ShowIncrement increment={increment} />
        </div>
    )
}
