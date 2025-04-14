import React from 'react'

function List(props) {


  
  //fruits.sort((a,b)=>a.name.localeCompare(b.name));
  //fruits.sort((a,b)=>b.name.localeCompare(a.name));
  //fruits.sort((a,b)=>a.calories-b.calories);
  //.sort((a,b) => b.calories-a.calories);
  //flitering

  const itemList = props.items;
  const category = props.category;


  //const lowCal = fruits.filter(fruit=> fruit.calories < 100);

  /*const listItems = lowCal.map((lowCal => <li key={lowCal.id}>
                                              {lowCal.name}:&nbsp;
                                              {lowCal.calories}</li>));
  */
  
  const listItems = itemList.map((item) => <li key={item.id}>
                                                  {item.name}:&nbsp;
                                                  {item.calories}</li>);
  
  return (
    <>
      <h2 className='list-category'>{category}</h2>
      <ol className='list-items'>{listItems}</ol>;
    </>
  );
}

export default List
