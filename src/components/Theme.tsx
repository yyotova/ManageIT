import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import React, { ReactNode } from 'react';

interface ManageITThemeProviderProps {
  children: ReactNode;
}

export default function ManageITThemeProvider({ children }: ManageITThemeProviderProps) {
  const theme = createMuiTheme({
    typography: {
      fontFamily: 'Comfortaa',
    },
    palette: {
      secondary: {
        main: '#424242',
      },
    },
    overrides: {
      MuiButton: {
        text: {
          fontFamily: 'Comfortaa',
        },
      },
      MuiDialogTitle: {
        root: {
          marginTop: 20,
          padding: '17px 0',
          '& > * ': {
            fontSize: '26px',
          },
        },
      },
      MuiCardContent: {
        root: {
          "&:last-child": {
            paddingBottom: '5px',
          },
        },
      },
      MuiInputBase: {
        root: {
          width: '350px',
          padding: '10px !important'
        }
      },
      MuiGrid: {
        root: {
          padding: '30px'
        }
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}