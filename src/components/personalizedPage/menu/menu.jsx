import React from "react";

import themes from "../../../styles/muiCustomThemes";

import { ThemeProvider } from "@mui/material/styles";

import { Stack, Button, CardContent } from "@mui/material";

function buildMenu({ menuToggle }) {
  return (
    <ThemeProvider theme={themes.menuTheme}>
      <CardContent>
        <Stack direction="column" spacing={2} alignContent="center"></Stack>
      </CardContent>
    </ThemeProvider>
  );
}

export default function menu() {
  const [menu, menuToggle] = React.useState(false);
}
