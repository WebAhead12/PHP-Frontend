import React from "react";

import themes from "../../../styles/muiCustomThemes";

import styles from "../../../styles/styles";

import { ThemeProvider } from "@mui/material/styles";

import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";

export default function Login() {
  return (
    <ThemeProvider theme={themes.accountCardTheme}>
      <Stack direction="column" spacing={2}>
        <TextField variant="filled" id="username-input" label="Username" required={true} />
      </Stack>
    </ThemeProvider>
  );
}
