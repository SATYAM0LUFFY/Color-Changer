import { useState } from 'react'
import './App.css'
import Input from './components/input'
import Paper from './components/paper'
function App() {

  const [color, setColor] = useState("#ffffff");
  return (
    <>
    <div className="application">

      <Input color = {color}  setColor= {setColor}/>
      <Paper color={color} />
    </div>
      
    </>
  )
}

export default App
