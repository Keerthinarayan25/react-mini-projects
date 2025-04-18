import React from "react";
import "./App.css";
import { slides } from "./component/image-slider/CarouselData.json";
//import Accordian from "./component/accordian";

//import MyComponent2 from './MyComponent2';

function App() {
  /*const fruits =[ {id:1,name:"apple",calories:95},
    {id:2,name:"grapes",calories:45},
    {id:3,name:"coconut",calories:55},
    {id:4,name:"blueBerry",calories:105},
    {id:5,name:"pineapple",calories:101} 
];
  
  return (
    <List items={fruits} category="fruits" />
    );
    */

  return (
    <div className="App">
      {/*<Accordian />*/}

      <Carousel data={slides} />
    </div>
  );
}

export default App;
