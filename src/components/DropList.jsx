import React from "react";
import DropTarget from "./DropTarget";

export default () => {
  const [items, setItems] = React.useState([]);

  const itemDropped = (item) => setItems([...items, item]);
  return (
    <DropTarget onItemDropped={itemDropped} dropEffect="link">
      <div className="drag-drop-container">
        {items.map((item) => (
          <div key={item.id}>
            <div> Name: {item.name} </div>
            <div> Age: {item.age} </div>
          </div>
        ))}
      </div>
    </DropTarget>
  );
};
