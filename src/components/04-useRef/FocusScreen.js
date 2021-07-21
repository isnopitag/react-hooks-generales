import React, { useRef } from 'react'
import '../02-useEffect/counter.css';

export const FocusScreen = () => {

    
    const inputRef = useRef();

    const handleOnclick = () => {
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            <input ref={ inputRef}type="text" className="form-control" placeholder="Su nombre"/>
            <button className="btn btn-outline-primary mt-5" onClick={handleOnclick}>
                focus
            </button>
        </div>
    )
}
