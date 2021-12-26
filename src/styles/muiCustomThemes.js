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
    button_primary: { main: "#1d1e22", contrastText: "#e3e3e3" },
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
          color: "var(--default-account-text-color)",
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--default-menu-button-color)",
        },
        input: {
          color: "var(--default-account-text-color)",
        },
      },
    },
  },
});

const editMenu = createTheme({
  components: {
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 73,
          height: 51,
          padding: 8,
        },
        switchBase: {
          padding: 11,
          color: "var(--default-text-color)",
        },
        thumb: {
          width: 28,
          height: 28,
          border: "1px solid var(--default-background-color)",
          backgroundColor: "var(--default-account-background-color)",
        },
        track: {
          backgroundColor: "var(--default-toggle-background-off-color)",
          opacity: "1 !important",
          borderRadius: 20,
          position: "relative",
          "&:checked": {},
          "&:before, &:after": {
            display: "inline-block",
            position: "absolute",
            fontSize: 14,
            top: "50%",
            width: "50%",
            transform: "translateY(-50%)",
            color: "#fff",
            textAlign: "center",
          },
          "&:before": {
            content: '"on"',
            left: 1,
          },
          "&:after": {
            content: '"off"',
            right: 1,
          },
        },
      },
    },
    MuiStack: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--default-account-background-color)",
          width: "250px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: "100%",
          height: "24.1%",
          backgroundColor: "var(--default-menu-button-color)",
          color: "var(--default-text-color)",
          fontSize: "12px",
        },
      },
    },
  },
});

const menuToggleTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: "calc(100%-1px)",
          height: "24.1%",
          border: "1px solid #000000",
          backgroundColor: "var(--default-menu-button-color)",
          color: "var(--default-text-color)",
          fontSize: "30px",
          "&:hover": { backgroundColor: "var(--default-menu-button-hover-color)" },
        },
      },
    },
  },
});

const menuTheme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          transition: "all 1s ease-in-out",
          width: "81.5%",
          height: "clamp(200px,35%,300px)",
          backgroundColor: "var(--default-menu-button-color)",
          margin: "auto",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: "calc(100%-15px)",
          height: "24.1%",
          backgroundColor: "var(--default-menu-button-color)",
          color: "var(--default-text-color)",
          fontSize: "20px",
          "&:hover": { backgroundColor: "var(--default-menu-button-hover-color)" },
        },
      },
    },
  },
});

const exports = { accountTheme, menuTheme, menuToggleTheme, editMenu };

export default exports;
