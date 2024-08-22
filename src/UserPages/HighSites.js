import React, { useState, useEffect, useRef } from "react";
import { Buttons } from "components/Buttons/Buttons";
import { Size } from "media-query";
//import Cookies from "universal-cookie";
import { SearchBar } from "components/searchBar";
import { Sheets, ConditionList } from "components/Data/Sheets";
import { JobDetails } from "components/JobDetails";
import { SearchResults } from "components/Tables/SearchResults";
import Cookies from "universal-cookie";
import Moment from "moment";
import {
  PopoverCamera,
  PopoverSaved,
  PopoverSubmitted,
} from "components/PopOvers/Popovers";
import { PreventativeSheet } from "components/Tables/Preventative";
import { SelectedSheet, SheetButtons } from "components/CheckSheets";
import Login from "Images/Login.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import sample3 from "Videos/sample3.mp4";
const cookies = new Cookies();

export const HighSites = () => {
  const size = Size();
  Moment.locale("en");

  const Reg = () => {
    return (
      <div style={{ position: "fixed", top: "40%" }}>
        <div
          style={{ backgroundColor: "#363535" }}
          className="flex text-gray-light text-center justify-center p-1 pt-3  max-w-3xl"
        >
          Login to your account
        </div>
        <div
          style={{ backgroundColor: "#363535", opacity: "100%" }}
          className="bg-white max-w-3xl"
        >
          <div className="grid grid-flow-row gap-2 p-3">
            <TextField
              sx={{ bgcolor: "whitesmoke" }}
              label="Username/email"
              size="small"
            />
            <TextField
              sx={{ bgcolor: "whitesmoke" }}
              label="Password"
              size="small"
            />
          </div>
          <div className="grid grid-flow-row gap-2">
            <div className="text-center justify-center font-serif text-gray-light p-2">
              Want to apply?
              <Button
                sx={{ color: "whitesmoke", padding: "3pt" }}
                href="Register"
                size="small"
              >
                Register here
              </Button>
            </div>
            <div className="text-center justify-center font-serif text-gray-light p-2">
              Forgot your password ?
            </div>
            <div className="text-center justify-center font-serif text-gray-light p-2">
              no worries, click
              <Button size="small" sx={{ color: "whitesmoke", padding: "3pt",left:"2pt",marginRight:"4pt" }}>
                here
              </Button>
              to reset your password.
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{ backgroundColor: "#bfbfbf", padding: "5pt" }}
      className="rounded-t-md rounded-b-md"
    >
      <div className="flex align-center justify-center">
        <img src={Login}></img>
        <Reg />
      </div>
    </div>
  );
};
