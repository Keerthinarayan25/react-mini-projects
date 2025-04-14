import React,{useState} from 'react';

function MyComponent2() {
  const [name, setName] = useState("Guest");
  const [quantity,setQuantity] = useState();
  const [comment,setComment] = useState();
  const [payment, setPayment] = useState("");
  function handleName(event){
    setName(event.target.value);
  }
  function handleNumber(event){
    setQuantity(event.target.value);
  }
  function handleComment(event){
    setComment(event.target.value);
  }
  function handlePayment(event){
    setPayment(event.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handleName} type="text" />
      <p>Name:{name}</p>
      <input value={quantity} onChange={handleNumber} type="number" />
      <p>Number:{quantity}</p>
      <textarea value={comment} placeholder='Give feedback' onChange={handleComment}/>
      <p>Comment:{comment}</p>

      <select value={payment} onChange={handlePayment}>
        <option value="">Select payment Method</option>
        <option value="visa">Visa</option>
        <option value="Master Card">Master Card</option>
        <option value="americanexpress">American Express</option>
      </select>
        <p>Payment: {payment}</p>
    </div>
  )
}

export default MyComponent2;
