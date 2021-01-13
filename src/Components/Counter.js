import React, { useState } from "react";

function Counter (props) {
    console.log(props)
    //props is an object

    function increaseCounter () {
        setCount(count + 1 )
        
    }

    //setCount - function - only way to change the state is to use what React provided
    const [count, setCount] = useState(props.initialVal);

    return (
        <div>
            <p>hi there!</p>
            <p>you clicked {count} times!</p>
            <button onClick={() => increaseCounter()}>Increase by 1</button>
            <button onClick={() => setCount(count - 1)}>Decrease by 1</button>
            {/* logic in line */}
        </div>
    );

}







export default Counter;