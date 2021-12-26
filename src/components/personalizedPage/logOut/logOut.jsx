import React from "react";

import themes from "../../../styles/muiCustomThemes";

import LogoutIcon from "@mui/icons-material/Logout";

import { ThemeProvider } from "@mui/material/styles";

import { Stack } from "@mui/material";

export default function LogOut() {
  return (
    <Stack>
      <LogoutIcon></LogoutIcon>
    </Stack>
  );
}
