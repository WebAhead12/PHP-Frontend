import React from "react";

import themes from "../../../styles/muiCustomThemes";

import styles from "../../../styles/styles";

import { ThemeProvider } from "@mui/material/styles";

import { Stack, TextField, Button, CardContent } from "@mui/material";

export default function Login() {
  return (
    <ThemeProvider theme={themes.accountTheme}>
      <CardContent>
        <Stack direction="column" spacing={2} alignContent="center">
          <TextField color="primary" variant="filled" id="username-input" label="Username" required={true} />
          <TextField variant="filled" id="password-input" label="Password" required={true} />
        </Stack>
      </CardContent>
      <CardContent>
        <Stack direction="row" spacing={1} justifyC="center">
          <Button variant="contained" color="button_primary" sx={{ width: "75%" }}>Login</Button>
          <Button variant="contained" color="button_primary" sx={{ width: "25%" }}>Register</Button>
        </Stack>
      </CardContent>
    </ThemeProvider>
  );
}
