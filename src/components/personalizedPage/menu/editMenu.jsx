import React from "react";

import themes from "../../../styles/muiCustomThemes";

import utils from "../../../utils/util";

import { Rnd } from "react-rnd";

import { ThemeProvider } from "@mui/material/styles";

import { Stack, Button, CardContent, Card, Switch } from "@mui/material";

function BuildEditMenu({
  currentModule,
  text,
  setText,
  setImage,
  shortcutMode,
  setShortcutMode,
  imageCheck,
  setImageCheck,
  textCheck,
  setTextCheck,
  setDeleteModule,
}) {
  const [getPosition, setPosition] = React.useState([document.body.clientWidth / 2 - 125, document.body.clientHeight / 2 - 113]);
  const [currentText, setCurrentText] = React.useState(text);

  return (
    <ThemeProvider theme={themes.editMenu}>
      <Rnd
        dragGrid={[5, 5]}
        bounds="parent"
        position={{ x: getPosition[0], y: getPosition[1] }}
        style={{ position: "absolute", zIndex: "7" }}
        onDragStop={(e, d) => {
          setPosition([d.x, d.y]);
        }}
      >
        <Card>
          <CardContent>
            <Stack direction="column" space="2" alignContent="center">
              <Stack sx={{ display: "block" }} direction="row" space="2" alignContent="center">
                <span style={{ alignSelf: "center", color: "#fc6161", fontSize: "25px" }}>{"Image"}</span>
                <Switch
                  checked={imageCheck}
                  onChange={() => {
                    if (currentModule.moduleid) setImageCheck(!imageCheck);
                  }}
                ></Switch>
              </Stack>
              {imageCheck ? (
                <label style={{ width: "100%" }} htmlFor="contained-button-file-module">
                  <input
                    accept="image/*"
                    id="contained-button-file-module"
                    type="file"
                    style={{ display: "none" }}
                    onChange={(e) => {
                      utils.imageToBase64(e.target.files[0]).then((imageBase64) => {
                        setImage(imageBase64);
                      });
                    }}
                  />
                  <Button variant="contained" sx={{ width: "100%" }} component="span">
                    Upload Image
                  </Button>
                </label>
              ) : null}
              <Stack sx={{ display: "block" }} direction="row" space="2" alignContent="center">
                <span style={{ alignSelf: "center", color: "#fc6161", fontSize: "25px" }}>{"Text"}</span>
                <Switch
                  checked={textCheck}
                  onChange={() => {
                    if (currentModule.moduleid) setTextCheck(!textCheck);
                  }}
                ></Switch>
              </Stack>
              {textCheck ? (
                <input
                  value={currentText}
                  onMouseDown={(e) => e.stopPropagation()}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") return setText(e.target.value);
                  }}
                  onChange={(e) => {
                    setCurrentText(e.target.value);
                  }}
                  type="text"
                  placeholder="Press enter to submit..."
                />
              ) : null}
              <Stack sx={{ display: "block" }} direction="row" space="5" alignContent="center">
                <span style={{ alignSelf: "center", color: "#fc6161", fontSize: "22px" }}>{"Shortcut"}</span>
                <Switch
                  checked={shortcutMode}
                  onChange={() => {
                    if (currentModule.moduleid) setShortcutMode(!shortcutMode);
                  }}
                ></Switch>
              </Stack>
              <Button
                variant="contained"
                onClick={() => {
                  if (currentModule.moduleid) setDeleteModule(true);
                }}
              >
                DELETE
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Rnd>
    </ThemeProvider>
  );
}
export default function editMenu(props) {
  return <>{props.editMenu ? <BuildEditMenu {...props}></BuildEditMenu> : null}</>;
}
