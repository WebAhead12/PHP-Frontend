import React from "react";

import themes from "../../styles/muiCustomThemes";

import styles from "../../styles/styles";

import { ThemeProvider } from "@mui/material/styles";

import { Card } from "@mui/material";

import LoginComponent from "./login/login";
import RegisterComponent from "./register/register";

export default function AccountComponent({ setLoggedIn }) {
  const [isRegisterMode, setRegisterMode] = React.useState(false);
  return (
    <>
      <img src="./assets/Logo.png" alt="Logo" style={styles.accountLogoStyle} />
      <ThemeProvider theme={themes.accountTheme}>
        <Card raised sx={{ height: isRegisterMode ? "360px" : "280px" }}>
          {isRegisterMode ? (
            <RegisterComponent setRegister={setRegisterMode} />
          ) : (
            <LoginComponent setRegister={setRegisterMode} setLoggedIn={setLoggedIn} />
          )}
        </Card>
      </ThemeProvider>
    </>
  );
}
