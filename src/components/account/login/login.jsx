import React from "react";

import themes from "../../../styles/muiCustomThemes";


import { ThemeProvider } from "@mui/material/styles";

import { Stack, TextField, Button, CardContent } from "@mui/material";

export default function Login({ setRegister }) {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [usernameError, setUsernameError] = React.useState(false)
  const [passwordError, setPasswordError] = React.useState(false)

  return (
    <ThemeProvider theme={themes.accountTheme}>
      <CardContent>
        <Stack direction="column" spacing={2} alignContent="center">
          <TextField required color="primary" variant="filled" id="username-input" label="Username" error={usernameError ? true : false} onChange={(e) => setUsername(e.target.value)} />
          <TextField required variant="filled" id="password-input" label="Password" type="password" error={passwordError ? true : false} onChange={(e) => setPassword(e.target.value)} />
        </Stack>
      </CardContent>
      <CardContent>
        <Stack direction="row" spacing={1} justifyC="center">
          <Button variant="contained" color="button_primary" sx={{ width: "75%" }}>Login</Button>
          <Button variant="contained" color="button_primary" sx={{ width: "25%" }} onClick={(e) => { setRegister(true) }}>Register</Button>
        </Stack>
      </CardContent>
    </ThemeProvider>
  );
}
