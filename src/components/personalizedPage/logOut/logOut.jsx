import React from "react";

import LogoutIcon from "@mui/icons-material/Logout";

import { Stack } from "@mui/material";

export default function LogOut() {
  return (
    <Stack direction="row" spacing={2} alignContent="center">
      <LogoutIcon sx={{ position: "absolute", bottom: "clamp(10px,1%,50px)", transform: "scale(3)", left: "10px" }}></LogoutIcon>
    </Stack>
  );
}
