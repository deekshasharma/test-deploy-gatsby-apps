import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"

export const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: "#FFFFFF",
      },
      secondary: {
        main: "#000000",
        light: "rgba(255, 255, 255, 0.6)",
        800: "#606060",
        500: "#c2c2c2",
        400: "#DEDEDE",
        200: "#f5f5f5",
      },
      text: {
        primary: "rgba(0,0,0,1)",
        secondary: "rgba(0,0,0,0.6)",
      },
    },
  })
)
