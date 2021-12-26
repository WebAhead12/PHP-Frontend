import React from "react";

import themes from "../../../styles/muiCustomThemes";

import { ThemeProvider } from "@mui/material/styles";

import { Stack, Button, CardContent, Card, Switch } from "@mui/material";

function BuildEditMenu({ currentModule, saveCurrentModuleData, shortcutMode, setShortcutMode, imageCheck, setImageCheck, textCheck, setTextCheck }) {
  return (
    <Card>
      <CardContent>
        <Stack direction="column" space="2" alignContent="center">
          <Stack sx={{ display: "block" }} direction="row" space="1" alignContent="center">
            <span style={{ alignSelf: "center", color: "#fc6161" }}>{"Image"}</span>
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
          <Stack sx={{ display: "block" }} direction="row" space="1" alignContent="center">
            <span style={{ alignSelf: "center", color: "#fc6161" }}>{"Text"}</span>
            <Switch
              checked={textCheck}
              onChange={() => {
                setTextCheck(!textCheck);
              }}
            ></Switch>
          </Stack>
          {textCheck ? (
            <label style={{ width: "100%" }} htmlFor="contained-button-file">
              <input id="contained-button-file" type="text" onKeyDown={(e) => e.key === "Enter" ? saveCurrentModuleData({ ...currentModule, text: e.target.value }) : null} />
            </label>
          ) : null}
          <Stack sx={{ display: "block" }} direction="row" space="1" alignContent="center">
            <span style={{ alignSelf: "center", color: "#fc6161" }}>{"Shortcut"}</span>
            <Switch
              checked={shortcutMode}
              onChange={() => {
                setShortcutMode(!shortcutMode);
              }}
            ></Switch>
          </Stack>
          <Button>DELETE</Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
export default function editMenu(props) {
  return (
    <>
      {editMenu ? (
        <BuildEditMenu
          {...props}
        ></BuildEditMenu>
      ) : null}
    </>
  );
}
