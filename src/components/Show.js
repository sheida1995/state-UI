import React, { useState } from 'react'

const Show = () => {
    const [counter , setCounter]=useState(0);
    const [show , setShow]=useState(true);

    //events
    const showHandler =()=> setShow (true);
    const hideHandler =()=> setShow (false);
    const increaseHandler1 =() => {
        setCounter(counter => counter+1);
    }
    const increaseHandler3 =() => {
        setCounter(counter => counter+1);
        setCounter(counter => counter+1);
        setCounter(counter => counter+1);
    }
    const stopHandler =() =>{
        setCounter("-")
    }


  return (
    <>
    <button onClick={showHandler}>show</button>
    <button onClick={hideHandler}>hide</button>
    {
        show ? (<div>
            <h1>counter</h1>
            <p>{counter}</p>
            <button onClick={increaseHandler1}>increase1</button>
            <button onClick={increaseHandler3}>increase3</button>
            <button onClick={stopHandler}>stop</button>
            </div>) : null
    }
      
    </>
  )
}

export default Show
