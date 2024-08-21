/**
 * @description      :
 * @author           : Grant
 * @group            :
 * @created          : 17/08/2021 - 13:19:37
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 17/08/2021
 * - Author          : Grant
 * - Modification    :
 **/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// vendor styles
import "@fortawesome/fontawesome-free/css/all.css";
import "react-datetime/css/react-datetime.css";
import "tailwind.css";
import { ScreenLayout } from "components/Display/Screenlayout";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const theme = createTheme({});
window.theme = theme;
cookies.set("Token", "", { path: "/" });
cookies.set("User_id", "", { path: "/" });

ReactDOM.render(
  <ThemeProvider>
    <BrowserRouter>
      <ScreenLayout />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
