import data from "./data";
import React, { useState } from "react";
import "./Style.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  function singleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId );
  }
  console.log(selected);

  return (
    <div className="wrapper">
      <button>Enable Multi selection</button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={() => singleSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
