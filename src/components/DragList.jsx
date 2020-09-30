import React from "react";
import Drag from "./Drag";
import logo from "../logo.svg";

const style = {
  background: "lightgray",
  border: "black solid 2px",
  padding: "1rem 1rem",
};

const peopleList = [
  {
    id: "aaV1",
    name: "Roxanne",
    age: 32,
  },
  {
    id: "xoV2",
    name: "Nate",
    age: 33,
  },
];

export default () => {
  return (
    <div className="drag-drop-container" style={style}>
      {peopleList.map((person) => (
        <Drag
          key={person.id}
          dataItem={person}
          dragImage={logo}
          dropEffect="link"
        >
          <div>Name: {person.name}</div>
          <div>Age: {person.age}</div>
        </Drag>
      ))}
    </div>
  );
};
