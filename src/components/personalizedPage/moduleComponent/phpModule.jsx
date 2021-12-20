import React from "react";

import { Rnd } from "react-rnd";

export default function PhpModule({ moduleid, editMode = false, x = 0, y = 0, width = 100, height = 100, text = "", image = "" }) {
  const [getPosition, setPosition] = React.useState([x, y])
  const [getSize, setSize] = React.useState([width, height])
  const [getText, setText] = React.useState(text)
  const [getImage, setImage] = React.useState(image)

  return (
    <>
      <Rnd dragGrid={[5, 5]} resizeGrid={[5, 5]}
        size={{ width: getSize[0], height: getSize[1] }}
        position={{ x: getPosition[0], y: getPosition[1] }}
        onDragStop={(e, d) => { setPosition([d.x, d.y]) }}

        onResizeStop={(e, direction, ref, delta, position) => {
          setSize([ref.offsetWidth, ref.offsetHeight])
          setPosition([position.x, position.y])
        }}

        enableResizing={editMode}
        disableDragging={!editMode}
        bounds="parent"
        style={{ backgroundColor: "#ffff" }}
      >
      </Rnd>
    </>
  );
}
