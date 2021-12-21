import React from "react";

import { Rnd } from "react-rnd";

export default function PhpModule({
  moduleid,
  editMode = false,
  shortcutMode = true,
  x = 0,
  y = 0,
  width = 100,
  height = 100,
  text = "",
  image = "",
}) {
  const [getPosition, setPosition] = React.useState([x, y]);
  const [getSize, setSize] = React.useState([width, height]);
  const [saved, setSaved] = React.useState(0);

  React.useEffect(() => {
    console.log("test");
    fetch(process.env.REACT_APP_API + "/update", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${window.localStorage.getItem("access_token")}` },
      body: JSON.stringify({ id: moduleid, module: { image: image, text: text, position: getPosition, size: getSize } }),
    })
      .then((res) => res.json())
      .then(() => {
        setSaved(1);
        setTimeout(setSaved, 1000, 0);
      })
      .catch(() => {
        setSaved(-1);
        setTimeout(setSaved, 1000, 0);
      });
  }, [getPosition, getSize]);
  return (
    <>
      <Rnd
        dragGrid={[5, 5]}
        resizeGrid={[5, 5]}
        size={{ width: getSize[0], height: getSize[1] }}
        position={{ x: getPosition[0], y: getPosition[1] }}
        onDragStop={(e, d) => {
          setPosition([d.x, d.y]);
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
          setSize([ref.offsetWidth, ref.offsetHeight]);
          setPosition([position.x, position.y]);
        }}
        enableResizing={editMode}
        disableDragging={!editMode}
        bounds="parent"
        style={{
          backgroundColor: `rgba(${saved == 1 ? 0 : 255},${saved == -1 ? 0 : 255},${saved != 0 ? 0 : 255},${editMode ? (saved ? 0.5 : 0.075) : 0})`,
        }}
      >
        {image ? (
          <img
            alt="img"
            style={{
              position: "absolute",
              width: "95%",
              height: "95%",
              transform: "translate(-50%, -50%)",
              left: "50%",
              top: "50%",
              border: "0px",
            }}
            src={image}
          ></img>
        ) : null}

        {text ? (
          <p
            style={{
              position: "absolute",
              margin: "0 0",
              width: "95%",
              height: "95%",
              transform: "translate(-50%, -50%)",
              left: "50%",
              top: "50%",
              textAlign: "start",
              wordBreak: "break-word",
              overflow: "hidden",
            }}
          >
            {text}
          </p>
        ) : null}
      </Rnd>
    </>
  );
}
