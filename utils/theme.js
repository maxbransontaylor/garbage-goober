import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#ff914d",
      },
      secondary: {
        main: "#f15a24",
        dark: "#626262",
      },
      background: {
        default: "#ff914d",
      },
    },
    typography: {
      h1: {
        fontFamily: "Fredoka One",
      },
      h4: {
        fontFamily: "Raleway",
        fontStyle: "italic",
      },
    },
  })
);
