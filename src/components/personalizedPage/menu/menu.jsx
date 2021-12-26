import React from "react";

import themes from "../../../styles/muiCustomThemes";

import { ThemeProvider } from "@mui/material/styles";

import { Card } from "@mui/material";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import { Stack, Button, CardContent, Slide } from "@mui/material";

import utils from "../../../utils/util";

export default function Menu({ editMenu, setEditMenu, createModule }) {
  const [menu, menuToggle] = React.useState(false);
  const [closedMenu, closedToggle] = React.useState(true);

  React.useEffect(() => {
    if (menu) closedToggle(true);
    else setTimeout(closedToggle, 475, false);
  }, [menu]);
  return (
    <div
      style={{
        position: "absolute",
        zIndex: menu ? "6" : "0",
        top: "0",
        height: "300px",
        right: "50%",
        transform: "translateX(50%)",
        width: "80%",
      }}
    >
      <Slide direction="down" in={menu} mountOnEnter unmountOnExit>
        <div>
          <ThemeProvider theme={themes.menuTheme}>
            <Card>
              <CardContent>
                <Stack direction="column" spacing={2} alignContent="center">
                  <Button
                    variant="contained"
                    onClick={() => {
                      fetch(process.env.REACT_APP_API + "/create", {
                        method: "POST",
                        headers: { Authorization: `Bearer ${window.localStorage.getItem("access_token")}` },
                        body: JSON.stringify({ module: { image: "", text: "", position: [0, 0], size: [100, 100] } }),
                      })
                        .then((response) => {
                          return response.json();
                        })
                        .then((data) => {
                          console.log(data);
                          createModule(data.moduleid);
                        });
                    }}
                  >
                    Add Module
                  </Button>
                  <label style={{ width: "100%" }} htmlFor="contained-button-file">
                    <input
                      accept="image/*"
                      id="contained-button-file"
                      type="file"
                      style={{ display: "none" }}
                      onChange={(e) => {
                        utils.imageToBase64(e.target.files[0]).then((imageBase64) => {
                          document.body.style.backgroundImage = `url(${imageBase64})`;
                          fetch(process.env.REACT_APP_API + `/update/background`, {
                            method: "POST",
                            headers: { "Content-Type": "application/json", Authorization: `Bearer ${window.localStorage.getItem("access_token")}` },
                            body: JSON.stringify({ background: imageBase64 }),
                          });
                        });
                      }}
                    />
                    <Button variant="contained" sx={{ width: "100%" }} component="span">
                      Change Background
                    </Button>
                  </label>
                  <Button
                    variant="contained"
                    onClick={(e) => {
                      e.stopPropagation();
                      setEditMenu(!editMenu);
                    }}
                  >
                    Edit Mode
                  </Button>
                  <ThemeProvider theme={themes.menuToggleTheme}>
                    <Button variant="contained" sx={{ padding: "clamp(5px,5%,20px) 0" }} onClick={() => menuToggle(false)}>
                      <ArrowUpwardIcon sx={{ transform: "scale(1.34)" }} />
                    </Button>
                  </ThemeProvider>
                </Stack>
              </CardContent>
            </Card>
          </ThemeProvider>
        </div>
      </Slide>
      {!closedMenu && (
        <ThemeProvider theme={themes.menuToggleTheme}>
          <Button variant="contained" sx={{ height: "12%", width: "100%" }} onClick={() => menuToggle(true)}>
            <ArrowDownwardIcon sx={{ transform: "scale(1.34)" }} />
          </Button>
        </ThemeProvider>
      )}
    </div>
  );
}
