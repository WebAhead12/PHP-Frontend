import { createTheme } from "@mui/material/styles";

// --default-account-background-color: #25252b;
// --default-account-text-color: #e3e3e3;

// --default-background-color: #4d4d54;
// --default-text-color: #fc6161;

// --default-menu-background-color: #0d0d0f;
// --default-menu-button-color: #1d1e22;
// --default-menu-button-hover-color: #18191d;

// --default-toggle-background-off-color: #6d6767;
// --default-toggle-background-on-color: #fc6161;

const accountTheme = createTheme({
  palette: {
    primary: { main: "#e3e3e3" },
    button_primary: { main: "#1d1e22", contrastText: "#e3e3e3" }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          width: "75%",
          maxWidth: "480px",
          height: "calc(75% - 30px)",

          margin: "10vh auto",
          backgroundColor: "var(--default-account-background-color)",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "var(--default-account-text-color)"
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--default-menu-button-color)",
        },
        input: {
          color: "var(--default-account-text-color)"
        }
      },
    },
  },
});

const exports = { accountTheme };

export default exports;
