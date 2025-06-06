import React, {useState} from 'react';
import './Counter.css';

function Counter(){
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const minvalue = 0;

  const handleIncrement = () =>{
    setCount(prevCounter => prevCounter + step);
  };
  const handleDecrement = () =>{
    if (count - step >= minvalue){
      setCount(prevCounter => prevCounter - step)
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleStepChange = (event) => {
    setStep(Number(event.target.value));
  };

  return(
    <div style={{textAlign:'center', marginTop:'50px'}}>
      <h1>Counter Application</h1>
      <div style={{fontSize:'48px', margin:'50px'}}><span>{count}</span></div>
      <div>
        <button onClick={handleIncrement}>Increase by step</button>
        <button onClick={handleDecrement}>Decrease by step</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <div style={{marginTop:'20px'}}>
        <label >Set Increment / Decrement step
          <input type='number'value={step} onChange={handleStepChange} min="1" style={{marginLeft:'10px'}} />
        </label>

      </div>
    </div>
  );

}

export default Counter;