import React from 'react'
import "./paper.css"
const Paper = ({color}) => {
  return (
    <div className='paper' style={{backgroundColor : `${color}`}}>
    </div>
  )
}

export default Paper
