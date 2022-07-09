import * as React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import Router from "./Router";
import { ThemeProvider } from "@mui/system";
import theme from "./theme";
import AuthProvider from "./contexts/auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <CssBaseline />

    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ThemeProvider>
  </React.Fragment>
);
