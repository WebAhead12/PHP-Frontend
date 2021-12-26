import React from "react";

import themes from "../../../styles/muiCustomThemes";

import { Rnd } from "react-rnd";

import { ThemeProvider } from "@mui/material/styles";

import { Stack, Button, CardContent, Card, Switch } from "@mui/material";

function BuildEditMenu({ text, setText, shortcutMode, setShortcutMode, imageCheck, setImageCheck, textCheck, setTextCheck }) {
  return (
    <ThemeProvider theme={themes.editMenu}>
      <Rnd dragGrid={[5, 5]} bounds="parent">
        <Card>
          <CardContent>
            <Stack direction="column" space="2" alignContent="center">
              <Stack sx={{ display: "block" }} direction="row" space="2" alignContent="center">
                <span style={{ alignSelf: "center", color: "#fc6161", fontSize: "25px" }}>{"Image"}</span>
                <Switch
                  checked={imageCheck}
                  onChange={() => {
                    setImageCheck(!imageCheck);
                  }}
                ></Switch>
              </Stack>
              {imageCheck ? (
                <label style={{ width: "100%" }} htmlFor="contained-button-file">
                  <input accept="image/*" id="contained-button-file" type="file" style={{ display: "none" }} />
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
                    setTextCheck(!textCheck);
                  }}
                ></Switch>
              </Stack>
              {textCheck ? (
                <input
                  value={text}
                  onMouseDown={(e) => e.stopPropagation()}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                  type="text"
                  placeholder="Text..."
                />
              ) : null}
              <Stack sx={{ display: "block" }} direction="row" space="2" alignContent="center">
                <span style={{ alignSelf: "center", color: "#fc6161", fontSize: "22px" }}>{"Shortcut"}</span>
                <Switch
                  checked={shortcutMode}
                  onChange={() => {
                    setShortcutMode(!shortcutMode);
                  }}
                ></Switch>
              </Stack>
              <Button variant="contained">DELETE</Button>
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
