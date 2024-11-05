import React from 'react'
import "./input.css"


const Input = ({color , setColor}) => {
  
    function  onchangeHandler(event) {
        if (event.target.value.length >6){
            alert("ENTER VALID COLOR")
        }
        setColor(`#${event.target.value}`);

    }

  return (
    <div className='input-div'>
        <div className="input-container">
        <input type="text"   onChange={onchangeHandler} placeholder='Enter Your clour here' />
        
        </div>
    </div>
  )
}

export default Input
