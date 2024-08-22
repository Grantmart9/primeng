import React, { useState, useEffect } from "react";
import { Size } from "media-query";
import Cookies from "universal-cookie";
import TextField from "@mui/material/TextField";
import sample3 from "Videos/sample3.mp4";
const cookies = new Cookies();

const Reg = () => {
  return (
    <div style={{ position: "fixed",top:"30%" }}>
      <div
        style={{ backgroundColor: "#363535" }}
        className="flex text-gray-light text-center justify-center p-1  max-w-3xl"
      >
        Registration Form
      </div>
      <div
        style={{ backgroundColor: "#363535", opacity: "100%" }}
        className="bg-white max-w-3xl"
      >
        <div className=" grid grid-rows-4 gap-2 p-5 bg-white shadow-md mt-1">
          <div className="grid grid-cols-2 gap-2">
            <TextField
              sx={{ bgcolor: "whitesmoke" }}
              label="Programme Category"
              size="small"
            />
            <TextField
              sx={{ bgcolor: "whitesmoke" }}
              label="Applying for Programme"
              size="small"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <TextField
              sx={{ bgcolor: "whitesmoke" }}
              label="Company Registered Name"
              size="small"
            />
            <TextField
              sx={{ bgcolor: "whitesmoke" }}
              label="Registration Number"
              size="small"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <TextField
              sx={{ bgcolor: "whitesmoke" }}
              label="Contact Name"
              size="small"
            />
            <TextField
              sx={{ bgcolor: "whitesmoke" }}
              label="Email Address"
              size="small"
            />
          </div>
          <div className="grid grid-cols-2 gap-2 rounded-md">
            <TextField
              sx={{ bgcolor: "whitesmoke" }}
              label="Contact Number(s)"
              size="small"
            />
            <TextField
              sx={{ bgcolor: "whitesmoke" }}
              label="Incubation Partner Code"
              size="small"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Dashboard = () => {
  const size = Size();
  return (
    <div className="flex align-center justify-center">
      <video
        style={{ position: "sticky", width: "100%", height: "100%" }}
        autoPlay
        loop
        muted
        id="Video"
      >
        <source src={sample3} type="video/mp4" />
      </video>
      <Reg />
    </div>
  );
};
