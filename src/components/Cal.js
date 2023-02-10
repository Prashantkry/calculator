import React, { useState } from 'react'

export default function Cal(){
    const [text,setText]=useState("")
    const display=(event)=>{
        setText(text.concat(event.target.value))
    }
    const Clear=()=>{
        setText("")
    }
    const del=()=>{
        setText(text.slice(0, -1))  
    }
    const Calculate=()=> {
        // console.log()
        setText(eval(text).toString())
    }
    return(
        <>
            <div className="container">
                <div className="calculator">
                    <input type="text" 
                        placeholder="0" 
                        id="outputScreen" 
                        value={text} 
                    />
                    <button onClick={Clear}>Cl</button>
                    <button onClick={del}>DEL</button>
                    <button onClick={display} value="%">%</button>
                    <button onClick={display} value="/" type='button'>/</button>
                    <button onClick={display} value="7">7</button>
                    <button onClick={display} value="8">8</button>
                    <button onClick={display} value="9">9</button>
                    <button onClick={display} value="*">*</button>
                    <button onClick={display} value="4">4</button>
                    <button onClick={display} value="5">5</button>
                    <button onClick={display} value="6">6</button>
                    <button onClick={display} value="-">-</button>
                    <button onClick={display} value="1">1</button>
                    <button onClick={display} value="2">2</button>
                    <button onClick={display} value="3">3</button>
                    <button onClick={display} value="+">+</button>
                    <button onClick={display} value=".">.</button>
                    <button onClick={display} value="0">0</button>
                    <button onClick={Calculate} className="equal">=</button>
                </div>
            </div>
        </>
    )
}