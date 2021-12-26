import React from "react";

import themes from "../../../styles/muiCustomThemes";

import { ThemeProvider } from "@mui/material/styles";

import SearchIcon from "@mui/icons-material/Search";

import { Stack, TextField } from "@mui/material";

export default function Search() {
  const [search, setSearch] = React.useState("");
  return (
    <>
      <Stack
        sx={{
          position: "absolute",
          zIndex: "2",
          left: "50%",
          top: "4%",
          transform: "translateX(-50%)",
        }}
        direction="row"
        spacing={{ xs: 2 }}
        alignItems="center"
      >
        <SearchIcon
          onClick={() => {
            if (search != "") {
              window.open(`https://www.google.com/search?q=${search}&oq=${search}&aqs=chrome..69i57j46i433i512j69i65l3j69i60l3.3127j0j7&sourceid=chrome&ie=UTF-8
            `);
            }
          }}
          sx={{ marginTop: "15px", color: "#fc6161", backgroundColor: "#1d1e22", borderRadius: "50%", transform: "scale(1.25)" }}
        ></SearchIcon>
        <ThemeProvider theme={themes.search}>
          <TextField
            required
            color="primary"
            id="standard-search"
            size="small"
            type="search"
            variant="standard"
            label="Search"
            fullWidh
            margin="normal"
            onChange={(e) => setSearch(e.target.value)}
          />
        </ThemeProvider>
      </Stack>
    </>
  );
}
