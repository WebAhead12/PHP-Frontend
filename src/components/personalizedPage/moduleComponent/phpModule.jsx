import React from "react";

import { Rnd } from "react-rnd";

import styles from "../../../styles/styles";

export default function PhpModule({
  moduleid,
  currentModule,
  onClickFunction,
  editMode = false,
  shortcutMode = false,
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
    fetch(process.env.REACT_APP_API + "/update", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${window.localStorage.getItem("access_token")}` },
      body: JSON.stringify({ id: moduleid, module: { image: image, text: text, position: getPosition, size: getSize } }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.response == "updatedModule") setSaved(1);
        else setSaved(-1);
        setTimeout(setSaved, 1000, 0);
      })
      .catch(() => {
        setSaved(-1);
        setTimeout(setSaved, 1000, 0);
      });
  }, [getPosition, getSize, text, image]);
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
          border: `${editMode ? `2px solid ${currentModule.moduleid == moduleid ? "blue" : "gray"}` : ""}`
        }}
        onClick={onClickFunction}
      >
        {image ? <img alt="img" style={shortcutMode ? styles.moduleShortcutImage : styles.moduleImage} src={image}></img> : null}

        {text ? <p style={shortcutMode ? styles.moduleShortcutText : styles.moduleText}>{text}</p> : null}
      </Rnd>
    </>
  );
}
