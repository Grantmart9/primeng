import React, { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import { Size } from "media-query";
//import Cookies from "universal-cookie";
import { TextField } from "@mui/material";
import {
  SaveButtonStyle,
  CameraButtonStyle,
  ConditionButtonStyle,
  Background1,
  Background2,
} from "components/Display/feutures";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

export const SheetButtons = ({ handleMaintenance, Sheets, handleSheet }) => {
  const size = Size();
  return (
    <div>
      {size == "MD" || size == "SM" || size == "XS" ? (
        <div
          style={{ backgroundColor: Background1, opacity: "90%" }}
          className="grid grid-flow-row gap-2 mt-1 p-2 rounded-md"
        >
          {Sheets.map((item) => (
            <Button
              onClick={() => handleSheet(item)}
              sx={SaveButtonStyle}
              fullWidth="true"
              className="shadow-md"
            >
              <div>{item.Sheet}</div>
            </Button>
          ))}
          <Button onClick={handleMaintenance} sx={SaveButtonStyle}>
            Preventative maintenance
          </Button>
        </div>
      ) : (
        <div
          style={{ backgroundColor: Background1, opacity: "90%" }}
          className="grid grid-flow-col gap-2 mt-1 p-2 rounded-md"
        >
          {Sheets.map((item) => (
            <Button
              onClick={() => handleSheet(item)}
              sx={SaveButtonStyle}
              fullWidth="true"
              className="shadow-md"
              s
            >
              <div>{item.Sheet}</div>
            </Button>
          ))}
          <Button onClick={handleMaintenance} sx={SaveButtonStyle}>
            Preventative maintenance
          </Button>
        </div>
      )}
    </div>
  );
};

const Questions = ({
  QuestionSheet,
  selectedSheet,
  handleSubmit,
  handleOpen,
  ConditionList,
  handleCamera,
}) => {
  const size = Size();
  return (
    <>
      {size == "MD" || size == "SM" || size == "XS" ? (
        <Slide direction="up" in={true} timeout={1200}>
          <div
            className="grid grid-flow-row gap-1 w-full rounded-md p-1"
            style={{
              backgroundColor: Background1,
              opacity: "95%",
            }}
          >
            <div
              style={{
                backgroundColor: Background2,
                opacity: "80%",
                color: "white",
              }}
              className="text-center my-auto p-3 rounded-md"
            >
              {selectedSheet}
            </div>
            {QuestionSheet.map((q) => (
              <div
                style={{ backgroundColor: Background2, opacity: "90%" }}
                className="rounded-md p-1"
              >
                <div className="grid grid-flow-row gap-1">
                  <div
                    style={{ backgroundColor: Background2, opacity: "75%" }}
                    className="p-3 rounded-md text-center my-auto text-gray-light"
                  >
                    {q}
                  </div>
                  <div className="grid grid-flow-col gap-1 rounded-md">
                    {ConditionList.map((Condition) => (
                      <Button
                        size="small"
                        fullwidth="true"
                        className="shadow-md"
                        sx={{
                          backgroundColor: "#e3e3e3",
                          opacity: "75%",
                          maxHeight: "30pt",
                        }}
                      >
                        {Condition == "Good" ? (
                          <div className="text-gray-dark">Good</div>
                        ) : null}
                        {Condition == "Bad" ? (
                          <div className="text-gray-dark">Bad</div>
                        ) : null}
                        {Condition == "NA" ? (
                          <div className="text-gray-dark">NA</div>
                        ) : null}
                      </Button>
                    ))}
                  </div>
                  <div
                    style={{ backgroundColor: Background2, opacity: "75%" }}
                    className="grid grid-flow-col rounded-md p-1"
                  >
                    <TextField
                      sx={{ backgroundColor: "white" }}
                      className="rounded-md"
                      size="small"
                      fullWidth="true"
                      placeholder="Observations/Faults Report"
                    />
                    <div className="flex align-center justify-center">
                      <Button onClick={handleCamera} sx={CameraButtonStyle}>
                        <CameraAltIcon />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex align-center justify-center mt-2 mb-2">
              <div className="flex align-center justify-center">
                <Button onClick={handleOpen} sx={CameraButtonStyle}>
                  Save
                </Button>
              </div>
            </div>
          </div>
        </Slide>
      ) : (
        <Slide direction="up" in={true} timeout={1200}>
          <div
            className="grid grid-flow-row gap-1 w-full rounded-md p-1"
            style={{
              backgroundColor: Background1,
              opacity: "95%",
            }}
          >
            <div
              style={{
                backgroundColor: Background2,
                opacity: "80%",
                color: "white",
              }}
              className="text-center my-auto p-3 rounded-md"
            >
              {selectedSheet}
            </div>
            {QuestionSheet.map((q) => (
              <div className="grid grid-cols-3 gap-1">
                <div
                  style={{ backgroundColor: Background2, opacity: "75%" }}
                  className="p-3 rounded-md text-center my-auto text-gray-light"
                >
                  {q}
                </div>
                <div className="grid grid-flow-col gap-1 rounded-md">
                  {ConditionList.map((Condition) => (
                    <Button
                      className="shadow-md"
                      fullWidth="true"
                      sx={ConditionButtonStyle}
                    >
                      {Condition == "Good" ? (
                        <div className="text-gray-light">Good</div>
                      ) : null}
                      {Condition == "Bad" ? (
                        <div className="text-gray-light">Bad</div>
                      ) : null}
                      {Condition == "NA" ? (
                        <div className="text-gray-light">NA</div>
                      ) : null}
                    </Button>
                  ))}
                </div>
                <div
                  style={{ backgroundColor: Background2, opacity: "75%" }}
                  className="grid grid-flow-col rounded-md p-1"
                >
                  <TextField
                    sx={{ backgroundColor: "white" }}
                    className="rounded-md"
                    size="small"
                    fullWidth="true"
                    placeholder="Observations/Faults Report"
                  />
                  <div className="flex align-center justify-center">
                    <Button onClick={handleCamera} sx={CameraButtonStyle}>
                      <CameraAltIcon />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex align-center justify-center mt-2 mb-2">
              <div className="flex align-center justify-center">
                <Button onClick={handleOpen} sx={CameraButtonStyle}>
                  Save
                </Button>
              </div>
            </div>
          </div>
        </Slide>
      )}
    </>
  );
};

export const SelectedSheet = ({
  QuestionSheet,
  selectedSheet,
  handleSubmit,
  handleOpen,
  ConditionList,
  handleMaintenance,
  Sheets,
  handleSheet,
  handleCamera,
}) => {
  return (
    <Fade in={true} timeout={600}>
      <div>
        <SheetButtons
          handleMaintenance={handleMaintenance}
          Sheets={Sheets}
          handleSheet={handleSheet}
        />
        <div className="flex align-center justify-center mt-1">
          <Questions
            QuestionSheet={QuestionSheet}
            selectedSheet={selectedSheet}
            handleSubmit={handleSubmit}
            handleOpen={handleOpen}
            ConditionList={ConditionList}
            handleCamera={handleCamera}
          />
        </div>
      </div>
    </Fade>
  );
};
