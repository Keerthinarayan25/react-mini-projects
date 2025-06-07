import React, {useState} from "react";
import BasicFigure from "./BasicFigure";

const FigureList = () => {

  const [figures, setFigures] = useState([
    { imageUrl: 'https://picsum.photos/400', caption: 'Random Image 1' },
  ]);

  const addFigure = () => {
    const newFigure ={
      imageUrl: `https://picsum.photos/400?random=${figures.length+1}`,
      caption: `Random Image ${figures.length+1}`,
    };
    setFigures([...figures, newFigure]);
  };

  const removeFigure = () => {
    const UpdatedFigures = figures.slice(0,-1);
    setFigures(UpdatedFigures);
  };

  return(
    <div className="app">
      <h1>Dynamic Image Gallery</h1>
      <div className="figure-list-container">
        <div className="button-box">
          <button onClick={addFigure} className="action-button">Add Image</button>
          <button onClick={removeFigure} className="action-button">Remove Image</button>
        </div>

        <div className="figure-list">
          {figures.map((figures,index) => (
            <BasicFigure key={index} imageUrl={figures.imageUrl} caption={figures.caption} />
          ))}

        </div>
      </div>
    </div>
  );
};

export default FigureList;