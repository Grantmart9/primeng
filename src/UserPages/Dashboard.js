import React, { useState, useEffect } from "react";
import { Size } from "media-query";
import Cookies from "universal-cookie";
import TextField from "@mui/material/TextField";
const cookies = new Cookies();

export const Dashboard = () => {
  const size = Size();
  return (
    <div>
      <div
        style={{ marginTop: "12%" }}
        className="flex text-center justify-start p-1 shadow-md"
      >
        Registration Form
      </div>
      <div className="bg-white shadow-md">
        <div className=" grid grid-rows-4 gap-1 p-5 bg-white shadow-md mt-1">
          <div className="grid grid-cols-2 gap-1">
            <TextField label="Programme Category" size="small" />
            <TextField label="Applying for Programme" size="small" />
          </div>
          <div className="grid grid-cols-2 gap-1">
            <TextField label="Company Registered Name" size="small" />
            <TextField label="Registration Number" size="small" />
          </div>
          <div className="grid grid-cols-2 gap-1">
            <TextField label="Contact Name" size="small" />
            <TextField label="Email Address" size="small" />
          </div>
          <div className="grid grid-cols-2 gap-1">
            <TextField label="Contact Number(s)" size="small" />
            <TextField label="Incubation Partner Code" size="small" />
          </div>
        </div>
      </div>
    </div>
  );
};
