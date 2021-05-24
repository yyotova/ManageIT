import {createMuiTheme, CssBaseline, ThemeProvider} from "../../_snowpack/pkg/@material-ui/core.js";
import React from "../../_snowpack/pkg/react.js";
export default function ManageITThemeProvider({children}) {
  const theme = createMuiTheme({
    typography: {
      fontFamily: "Comfortaa"
    },
    palette: {
      secondary: {
        main: "#424242"
      }
    },
    overrides: {
      MuiButton: {
        text: {
          fontFamily: "Comfortaa"
        }
      },
      MuiDialogTitle: {
        root: {
          marginTop: 20,
          padding: "17px 0",
          "& > * ": {
            fontSize: "26px"
          }
        }
      },
      MuiCardContent: {
        root: {
          "&:last-child": {
            paddingBottom: "5px"
          }
        }
      },
      MuiInputBase: {
        root: {
          width: "350px",
          padding: "10px !important"
        }
      },
      MuiGrid: {
        root: {
          padding: "30px"
        }
      }
    }
  });
  return /* @__PURE__ */ React.createElement(ThemeProvider, {
    theme
  }, /* @__PURE__ */ React.createElement(CssBaseline, null), children);
}
