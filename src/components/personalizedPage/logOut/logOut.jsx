import React from "react";

import LogoutIcon from "@mui/icons-material/Logout";

import { Stack } from "@mui/material";

export default function LogOut({ setLoggedIn }) {
  return (
    <>
      <Stack
        sx={{ position: "absolute", bottom: "min(50px,0.2%)", left: "clamp(20px,1%,35px)" }}
        direction="row"
        spacing={{ xs: 3 }}
        alignContent="center"
      >
        <LogoutIcon
          onClick={() => {
            document.body.style.backgroundImage = "";
            setLoggedIn(false);
            window.localStorage.removeItem("access_token");
          }}
          sx={{ transform: "scale(-2.5)" }}
        ></LogoutIcon>
        <span style={{ alignSelf: "center", color: "#fc6161", fontSize: "25px" }}>{"Image"}</span>
      </Stack>
      <img
        src="./assets/Logo.png"
        alt="Logo"
        style={{ position: "absolute", bottom: "clamp(0.5px,0.1%,50px)", right: "5px ", height: "calc(8% - 15px)", objectFit: "cover" }}
      />
    </>
  );
}
