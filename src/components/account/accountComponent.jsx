import React from "react";

import themes from "../../styles/muiCustomThemes";

import styles from "../../styles/styles";

import { ThemeProvider } from "@mui/material/styles";

import { Card, CardContent } from "@mui/material";

import LoginComponent from "./login/login";
import RegisterComponent from "./register/register";

export default function AccountComponent() {
  const [isRegisterMode, setRegisterMode] = React.useState(false);
  return (
    <>
      <img src="./assets/Logo.png" alt="Logo" style={styles.accountLogoStyle} />
      <ThemeProvider theme={themes.accountCardTheme}>
        <Card backgroundColor="primary.main" raised={true}>
          <CardContent>{isRegisterMode ? <RegisterComponent /> : <LoginComponent />}</CardContent>
        </Card>
      </ThemeProvider>
    </>
  );
}
