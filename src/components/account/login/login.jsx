import React from "react";

import themes from "../../../styles/muiCustomThemes";

import { ThemeProvider } from "@mui/material/styles";

import { Stack, TextField, Button, CardContent } from "@mui/material";

const errObj = {
  MISSING_USERNAME: "Please enter a username",
  MISSING_PASSWORD: "Please enter a password",
  WRONG_USERNAME: "Username not found",
  WRONG_PASSWORD: "Password is incorrect",
  ERROR: "An error has occurred",
};

export default function Login({ setRegister, setLoggedIn }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [usernameError, setUsernameError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [error, setError] = React.useState("");

  const check = () => {
    setPasswordError(false);
    setUsernameError(false);
    if (!username) {
      setUsernameError(true);
      setError(errObj.MISSING_USERNAME);
      return;
    }

    if (!password) {
      setPasswordError(true);
      setError(errObj.MISSING_PASSWORD);
      return;
    }
  };

  function loginUser() {
    const user = { username: username, password: password };
    check();
    if (password && username) {
      fetch(process.env.REACT_APP_API + "/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          document.body.style.backgroundImage = `url(${data.background})`
          if (data.response === "noUser") {
            setUsernameError(true);
            setError(errObj.WRONG_USERNAME);
            setPassword("");
            return;
          } else if (data.response === "wrong password") {
            setPasswordError(true);
            return setError(errObj.WRONG_PASSWORD);
          } else if (data.response === "success") {
            window.localStorage.setItem("access_token", data.access_token);
            setLoggedIn(true);
          } else {
            setError(errObj.ERROR);
          }
        });
    }
  }
  return (
    <ThemeProvider theme={themes.accountTheme}>
      <CardContent>
        <Stack direction="column" spacing={2} alignContent="center">
          <TextField
            required
            color="primary"
            variant="filled"
            id="username-input"
            label="Username"
            error={usernameError ? true : false}
            inputProps={{ autoComplete: "new-password" }}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            required
            variant="filled"
            id="password-input"
            label="Password"
            type="password"
            value={password}
            error={passwordError ? true : false}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Stack>
      </CardContent>
      <CardContent sx={{ color: "red" }}>{error}</CardContent>
      <CardContent>
        <Stack direction="row" spacing={1} justifyContent="center">
          <Button
            variant="contained"
            color="button_primary"
            sx={{ width: "75%" }}
            onClick={() => {
              loginUser();
            }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="button_primary"
            sx={{ width: "25%" }}
            onClick={(e) => {
              setRegister(true);
            }}
          >
            Register
          </Button>
        </Stack>
      </CardContent>
    </ThemeProvider>
  );
}
