import React from "react";

import themes from "../../../styles/muiCustomThemes";

import { ThemeProvider } from "@mui/material/styles";

import { Stack, TextField, Button, CardContent } from "@mui/material";

const errObj = {
  MISSING_USERNAME: "Please enter a username",
  MISSING_PASSWORD: "Please enter a password",
  MISSING_CONFIRM_PASSWORD: "Please enter password confirmation",
  USERNAME_TAKEN: "Username already taken",
  WRONG_CONFIRMATION_PASSWORD: "Password confirmation does not match",
};

export default function Register({ setRegister }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [usernameError, setUsernameError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = React.useState(false);
  const [error, setError] = React.useState("");

  const check = (str = "") => {
    setConfirmPasswordError(false);
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
    if (!confirmPassword) {
      setConfirmPasswordError(true);
      setError(errObj.MISSING_CONFIRM_PASSWORD);
      return;
    }
    if (confirmPassword !== password) {
      setConfirmPasswordError(true);
      setError(errObj.WRONG_CONFIRMATION_PASSWORD);
      return;
    }
    if (str === "taken") {
      setUsernameError(true);
      setError(errObj.USERNAME_TAKEN);
      return;
    }
    if (str === "nottaken") setRegister(false);
  };

  const registerUser = () => {
    const user = { username: username, password: password };

    check();

    if (confirmPassword === password && username && password) {
      fetch(process.env.REACT_APP_API + "/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          check(data.response);
        });
    }
  };
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
          <TextField
            required
            variant="filled"
            id="password-confirm-input"
            label="Confirm Password"
            type="password"
            error={confirmPasswordError ? true : false}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
              registerUser();
            }}
          >
            Register
          </Button>
          <Button
            variant="contained"
            color="button_primary"
            sx={{ width: "25%" }}
            onClick={(e) => {
              setRegister(false);
            }}
          >
            Login
          </Button>
        </Stack>
      </CardContent>
    </ThemeProvider>
  );
}
