import { useState } from 'react'
import {PropTypes} from 'prop-types'

export default function CounterButton({by, incrementMethod, decrementMethod}){


    const [count, setCount] = useState(0);

    return(
      <div className="Counter">
       
        <div>
             <button className="counterButton" onClick={() => incrementMethod(by)}>+{by}</button>
             <button className="counterButton" onClick={() => decrementMethod(by)}>-{by}</button>
        </div>
       </div>
    )
  }

  CounterButton.propTypes = {
    by: PropTypes.number
  }

  CounterButton.defaultProps ={
    by: 1
  }