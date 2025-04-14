import React,{useState} from 'react';

function MyComponent() {
  let [name, setName] = useState("Guest");
  const displayName = () =>{
    setName("Keerthi");
  }
  let [age, setAge] = useState(0);
  const incrementAge =() =>{
    setAge(age+1);
  }
  const decrementAge = () =>{
    if(age <= 0){
      setAge(0);
    }else{
      setAge(age-1);
    }
  };
  const resetButton = () =>{
    setAge(0);
  }
  const [isEmployed, setIsEmployed] = useState(false);
  const employedStatus= () =>{
    setIsEmployed(!isEmployed);
  };

  return (
    <>
      <p>Name:{name}</p>
      <button onClick={displayName}>Set Name</button>
      <p>Age:{age}</p>
      <button onClick={incrementAge}>Increase Age</button>
      <button onClick={decrementAge}>Decrese Age</button>
      <button onClick={resetButton}>Reset Button</button>
      <p>Is Employed:{ isEmployed ? "YES" : "NO" }</p>
      <button onClick={employedStatus}>Employee Status</button>
    </>
  );
}

export default MyComponent;
