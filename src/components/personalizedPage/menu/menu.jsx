import React from "react";

import themes from "../../../styles/muiCustomThemes";

import { ThemeProvider } from "@mui/material/styles";

import { Card } from "@mui/material";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import { Stack, Button, CardContent, Slide } from "@mui/material";

import utils from "../../../utils/util";

// function BuildMenu({ menuToggle, setEditMenu, editMenu }) {
//   return (
//     <Paper sx={{ m: 1 }}>
//       <Box sx={{ height: 200 }}>
//         1
//         <ThemeProvider theme={themes.menuTheme}>
//           <Card>
//             <CardContent>
//               <Stack direction="column" spacing={2} alignContent="center">
//                 <Button variant="contained">Add Module</Button>
//                 <label style={{ width: "100%" }} htmlFor="contained-button-file">
//                   <input
//                     accept="image/*"
//                     id="contained-button-file"
//                     type="file"
//                     style={{ display: "none" }}
//                     onChange={(e) => {
//                       utils.imageToBase64(e.target.files[0]).then((imageBase64) => {
//                         document.body.style.backgroundImage = `url(${imageBase64})`;
//                         fetch(process.env.REACT_APP_API + `/update/${localStorage.getItem("access_token")}`, {
//                           method: "POST",
//                           headers: { "Content-Type": "application/json", Authorization: `Bearer ${window.localStorage.getItem("access_token")}` },
//                           body: JSON.stringify({ background: imageBase64 }),
//                         });
//                       });
//                     }}
//                   />
//                   <Button variant="contained" sx={{ width: "100%" }} component="span">
//                     Change Background
//                   </Button>
//                 </label>
//                 <Button variant="contained" onClick={() => setEditMenu(!editMenu)}>
//                   Edit Mode
//                 </Button>
//                 <ThemeProvider theme={themes.menuToggleTheme}>
//                   <Button variant="contained" sx={{ padding: "clamp(5px,5%,20px) 0" }} onClick={() => menuToggle(false)}>
//                     <ArrowUpwardIcon sx={{ transform: "scale(1.34)" }} />
//                   </Button>
//                 </ThemeProvider>
//               </Stack>
//             </CardContent>
//           </Card>
//         </ThemeProvider>
//       </Box>
//     </Paper>
//   );
// }

export default function Menu({ menu, menuToggle, editMenu, setEditMenu }) {
  return (
    <div>
      <Slide direction="down" in={menu} mountOnEnter unmountOnExit>
        <div>
          <ThemeProvider theme={themes.menuTheme}>
            <Card>
              <CardContent>
                <Stack direction="column" spacing={2} alignContent="center">
                  <Button variant="contained">Add Module</Button>
                  <label style={{ width: "100%" }} htmlFor="contained-button-file">
                    <input
                      accept="image/*"
                      id="contained-button-file"
                      type="file"
                      style={{ display: "none" }}
                      onChange={(e) => {
                        utils.imageToBase64(e.target.files[0]).then((imageBase64) => {
                          document.body.style.backgroundImage = `url(${imageBase64})`;
                          fetch(process.env.REACT_APP_API + `/update/${localStorage.getItem("access_token")}`, {
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
      {!menu && (
        <ThemeProvider theme={themes.menuToggleTheme}>
          <Button variant="contained" sx={{ height: "7%", width: "75%" }} onClick={() => menuToggle(true)}>
            <ArrowDownwardIcon sx={{ transform: "scale(1.34)" }} />
          </Button>
        </ThemeProvider>
      )}
    </div>
  );
}
