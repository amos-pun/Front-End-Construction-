import { useState } from 'react'
import React from 'react'
import { useEffect } from 'react'


const Counter = () => {
    let [count, setCount] = useState(0)
    let [data, Setd] = useState(0)
/* 
    useState - hook to manage state
        re renders the page when the alue changes
        syntax:
        let / const [name,value] = useState(initial value)
            name - variable name
            function - function to update variable, eg: setName
            initial value - starting value
                0-9 : number
                " " : string
                [ ] : array
                { } : objects

    useEffect - shows side effect when state variabl changes state
        syntax:
        useEffect(function, [state_variable])
            function => effect to be seen
            state_variables => list of state variables that trigger the function
                [] -> renders only on page load
                [var1, var2] -> renders on page load and when var1 or var2 changes
                null -> no array -> renders on load, and when any state variable changes
*/

    useEffect(()=>{
        prompt('enter')
    },[count])
    // const iten = () => {
    //     Setd(data+10)
    // }
    const dten = () => {
        Setd(data-10)
    }
    // const rten = () => {
    //     Setd(10)
    // }
    const increase = () => {
        setCount(++count)
    }

    const decrease = () => {
        setCount(--count)
    }

    const r = () => {
        setCount(0)
    }

    let [num, calc] = useState()

    const one = () => {
        calc(1)
    }
    const two = () => {
        calc(2)
    }
    const three = () => {
        calc(3)
    }
    const four = () => {
        calc(4)
    }
    const fi = () => {
        calc(5)
    }
    const si = () => {
        calc(6)
    }
    const se = () => {
        calc(7)
    }
  return (
    <div>
        <h1 className='text-center display-1'> 
            Count:{count}
        </h1>
        <center>
        
        
        <button className='btn btn-success fs-1 btn-lg px-5 m-1' onClick={increase}>+</button>
        <button className='btn btn-primary fs-1 btn-lg px-5 m-1' onClick={r}>reset</button>
        <button className='btn btn-danger fs-1 btn-lg px-5 m-1' onClick={decrease}>-</button>
        </center>
        <br></br>
        <h1 className='text-end display-1'> 
            {num}
        </h1>
        {
            count>10 &&
            <h1>Thank</h1>
        }
        <center>
            <button className='btn btn-primary fs-1 btn-lg px-5 m-1' onClick={one}>1</button>
            <button className='btn btn-primary fs-1 btn-lg px-5 m-1' onClick={two}>2</button>
            <button className='btn btn-primary fs-1 btn-lg px-5 m-1' onClick={three}>3</button>
            <button className='btn btn-primary fs-1 btn-lg px-5 m-1' onClick={four}>4</button>
            <button className='btn btn-primary fs-1 btn-lg px-5 m-1' onClick={fi}>5</button>
            <button className='btn btn-primary fs-1 btn-lg px-5 m-1' onClick={si}>6</button>
            <button className='btn btn-primary fs-1 btn-lg px-5 m-1' onClick={se}>7</button>
            <button className='btn btn-primary fs-1 btn-lg px-5 m-1' onClick={r}>8</button>
            <button className='btn btn-primary fs-1 btn-lg px-5 m-1' onClick={r}>9</button>
            <button className='btn btn-primary fs-1 btn-lg px-5 m-1' onClick={r}>0</button>
            <button className='btn btn-danger fs-1 btn-lg px-5 m-1' onClick={decrease}>.</button>
        </center>
        <br></br>
        <h1 className='text-center display-1'> 
            Count:{data}
        </h1>
        <center>
            <button className='btn btn-success fs-1 btn-lg px-5 m-1' onClick={()=> Setd(data+10)}>+</button>
            <button className='btn btn-primary fs-1 btn-lg px-5 m-1' onClick={()=>Setd(10)}>reset</button>
            <button className='btn btn-danger fs-1 btn-lg px-5 m-1' onClick={dten}>-</button>
        </center>


    </div>


  )
}

export default Counter