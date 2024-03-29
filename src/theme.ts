import red from "@material-ui/core/colors/red"
import {createMuiTheme} from "@material-ui/core/styles"

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    body2: {
      fontSize: "1.25rem",
    },
  },
})

export default theme
