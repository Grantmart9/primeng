import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import sample from "Videos/sample.mp4";
import sample2 from "Videos/sample2.mp4";
import sample3 from "Videos/sample3.mp4";
import Apply from "Images/Apply.png";
import {
  buttonColor,
  pageHeading,
  SaveButtonStyle,
} from "components/Display/feutures";
import { Size } from "media-query";

export const Login = ({ setJWT }) => {
  const size = Size();

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <video
        style={{
          position: "sticky",
          width: "100%",
          height: "100%",
          color: "blue",
        }}
        autoPlay
        loop
        muted
        id="Video"
      >
        <source src={sample} type="video/mp4" />
      </video>

      <video
        style={{ position: "sticky", width: "100%", height: "100%" }}
        autoPlay
        loop
        muted
        id="Video"
      >
        <source src={sample2} type="video/mp4" />
      </video>
      <video
        style={{ position: "sticky", width: "100%", height: "100%" }}
        autoPlay
        loop
        muted
        id="Video"
      >
        <source src={sample3} type="video/mp4" />
      </video>
      <div
        class="video-content"
        style={{ position: "absolute", top: "80%", right: "5%" }}
      >
        <Button href="Dashboard">
          <img src={Apply} width="70%" />
        </Button>
      </div>
    </div>
  );
};
