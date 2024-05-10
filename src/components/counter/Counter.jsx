import { useState } from 'react'
import './Counter.css'
import CounterButton from './CounterButton'

export default function Counter(){

  const [count, setCount] = useState(0);

  function incrementCounterParent(by){
    setCount (count+by)

  }
  function decrementCounterParent(by){
    setCount (count- by)

  }

  function resetCounter(){
    setCount(0)

  }

  return(
    <>
      <span className="totalCount"> {count}</span>
      <CounterButton by={1} incrementMethod={incrementCounterParent} decrementMethod={decrementCounterParent}/>
      <CounterButton by={2} incrementMethod={incrementCounterParent} decrementMethod={decrementCounterParent}/>
      <CounterButton by={5} incrementMethod={incrementCounterParent} decrementMethod={decrementCounterParent}/>
      <button className="ResetButton" onClick={resetCounter}>Reset</button>
      
     </>
     
            

      
  )
}



  //CounterButton.propTypes = {
    //by: propTypes.number
  //}

  