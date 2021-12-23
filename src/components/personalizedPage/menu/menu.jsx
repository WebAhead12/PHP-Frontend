import React from "react";

import themes from "../../../styles/muiCustomThemes";

import { ThemeProvider } from "@mui/material/styles";

import { Card } from "@mui/material";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import { Stack, Button, CardContent } from "@mui/material";

function BuildMenu({ menuToggle, setEditMenu, editMenu }) {
  return (
    <ThemeProvider theme={themes.menuTheme}>
      <Card>
        <CardContent>
          <Stack direction="column" spacing={2} alignContent="center">
            <Button variant="contained">Add Module</Button>
            <label style={{ width: "100%" }} htmlFor="contained-button-file">
              <input accept="image/*" id="contained-button-file" type="file" style={{ display: "none" }} />
              <Button variant="contained" sx={{ width: "100%" }} component="span">
                Change Background
              </Button>
            </label>
            <Button variant="contained" onClick={() => setEditMenu(!editMenu)}>
              Edit Mode
            </Button>
            <ThemeProvider theme={themes.menuToggleTheme}>
              <Button
                variant="contained"
                sx={{ padding: "clamp(5px,5%,20px) 0" }}
                onClick={() => {
                  setEditMenu(false);
                  menuToggle(false);
                }}
              >
                <ArrowUpwardIcon sx={{ transform: "scale(1.34)" }} />
              </Button>
            </ThemeProvider>
          </Stack>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}

export default function Menu({ menu, menuToggle, editMenu, setEditMenu }) {
  return menu ? (
    <BuildMenu menuToggle={menuToggle} editMenu={editMenu} setEditMenu={setEditMenu}></BuildMenu>
  ) : (
    <ThemeProvider theme={themes.menuToggleTheme}>
      <Button variant="contained" sx={{ height: "7%", width: "75%" }} onClick={() => menuToggle(true)}>
        <ArrowDownwardIcon sx={{ transform: "scale(1.34)" }} />
      </Button>
    </ThemeProvider>
  );
}
