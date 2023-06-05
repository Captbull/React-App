import React, { useState} from "react";

const Button =()=> {
    const [count,setCount] = useState(0)
    const increment = ()=>{
        setCount(count +1)
    }
    const decrement =() =>{
        setCount(count -1)
    }
    return (
        <div className="wrap">
            <div>{count}</div>
            <button className="in" onClick= {increment}>Increase</button>
            <button className="de" onClick={decrement}>Decrease</button>
        </div>
    )
};

export default Button