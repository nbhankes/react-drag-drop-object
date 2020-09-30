import React from "react";
import PropTypes from "prop-types";
import * as dropEffects from "./dropEffects";

const draggingStyle = {
  opacity: 0.25,
};

const style = {
  background: "lightgray",
  border: "red solid 2px",
  padding: "1rem 1rem",
};

const Drag = (props) => {
  const [isDragging, setIsDragging] = React.useState(false);
  const image = React.useRef(null);

  React.useEffect(() => {
    image.current = null;
    if (props.dragImage) {
      image.current = new Image();
      image.current.src = props.dragImage;
    }
  }, [props.dragImage]);

  const startDrag = (ev) => {
    setIsDragging(true);
    ev.dataTransfer.setData("drag-item", JSON.stringify(props.dataItem));
    ev.dataTransfer.effectAllowed = props.dropEffect;
    if (image.current) {
      ev.dataTransfer.setDragImage(image.current, 0, 0);
    }
  };

  const dragEnd = () => setIsDragging(false);

  return (
    <div
      style={(isDragging ? draggingStyle : {}, style)}
      draggable
      onDragStart={startDrag}
      onDragEnd={dragEnd}
    >
      {props.children}
    </div>
  );
};

Drag.propTypes = {
  dataItem: PropTypes.string.isRequired,
  dragImage: PropTypes.string,
  dropEffect: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Drag.defaultProps = {
  dragImage: null,
  dropEffect: dropEffects.All,
};

export default Drag;
