import React from "react";

import themes from "../../styles/muiCustomThemes";

import styles from "../../styles/styles";

import { ThemeProvider } from "@mui/material/styles";

import { Card } from "@mui/material";

import LoginComponent from "./login/login";
import RegisterComponent from "./register/register";

export default function AccountComponent() {
  const [isRegisterMode, setRegisterMode] = React.useState(false);
  return (
    <>
      <img src="./assets/Logo.png" alt="Logo" style={styles.accountLogoStyle} />
      <ThemeProvider theme={themes.accountTheme}>
        <Card raised={true} sx={{ height: isRegisterMode ? "240px" : "360px" }}>
          {isRegisterMode ? <RegisterComponent /> : <LoginComponent />}
        </Card>
      </ThemeProvider>
    </>
  );
}
