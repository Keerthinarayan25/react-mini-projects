import React from 'react'

function Button() {
  //const handleClickPara = (name) => console.log(`${name} It hurts`);
  /*let count =0;
  const handleClick =() =>{
    if (count > 3){
      console.log("Stop You clicked Me More than 3 times");
      console.log(`You clicked ${count}`);

    }
    else{
      console.log(`You clicked ${count}`);
      count+=1;
    }
  };
  return (
    <button onClick={handleClick}>Click Me</button>
  );
  */

  const handleClick = (e) => e.target.textContent ="ouch";
  return(
    <button onDoubleClick={(e)=> handleClick(e)}>Click Me</button>
  );
}

export default Button
