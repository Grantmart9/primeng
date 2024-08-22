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

const cookies = new Cookies();

export const HighSites = () => {
  const size = Size();
  Moment.locale("en");

  return (
    <div
      style={{ backgroundColor: "#bfbfbf", padding: "5pt" }}
      className="rounded-t-md rounded-b-md"
    >
      <img src={Login}></img>
    </div>
  );
};
