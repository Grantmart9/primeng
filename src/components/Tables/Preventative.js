import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { Fade } from "@material-ui/core";
import {
  SaveButtonStyle,
  Background1,
  Background2,
} from "components/Display/feutures";

export const PreventativeSheet = ({
  handleObservation,
  handleRepair,
  Sheet,
  handleSubmit
}) => {
  return (
    <Fade in={true} timeout={600}>
      <div className="Block">
        <div
          style={{ backgroundColor: Background1, opacity: "90%" }}
          className="grid grid-cols-2 gap-1 p-1 rounded-md mt-1 mb-1"
        >
          <Button onClick={handleObservation} sx={SaveButtonStyle}>
            Observation
          </Button>
          <Button onClick={handleRepair} sx={SaveButtonStyle}>
            Repaired
          </Button>
        </div>
        <div
          style={{
            backgroundColor: Background2,
            opacity: "60%",
            color: "white",
          }}
          className="text-center my-auto p-3 rounded-md mb-1"
        >
          {Sheet}
        </div>
        <div>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Item Description</TableCell>
                  <TableCell align="left">Section</TableCell>
                  <TableCell align="left">Leg</TableCell>
                  <TableCell align="left">Height</TableCell>
                  <TableCell align="left">Quantity</TableCell>
                  <TableCell align="left">Fault Description</TableCell>
                  <TableCell align="left">Priority</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell align="left">
                    <TextField
                      sx={{ backgroundColor: "white" }}
                      className="rounded-md"
                      size="small"
                      fullWidth="true"
                    />
                  </TableCell>
                  <TableCell align="left">
                    <TextField
                      sx={{ backgroundColor: "white" }}
                      className="rounded-md"
                      size="small"
                      fullWidth="true"
                    />
                  </TableCell>
                  <TableCell align="left">
                    <TextField
                      sx={{ backgroundColor: "white" }}
                      className="rounded-md"
                      size="small"
                      fullWidth="true"
                    />
                  </TableCell>
                  <TableCell align="left">
                    <TextField
                      sx={{ backgroundColor: "white" }}
                      className="rounded-md"
                      size="small"
                      fullWidth="true"
                    />
                  </TableCell>
                  <TableCell align="left">
                    <TextField
                      sx={{ backgroundColor: "white" }}
                      className="rounded-md"
                      size="small"
                      fullWidth="true"
                    />
                  </TableCell>
                  <TableCell align="left">
                    <TextField
                      sx={{ backgroundColor: "white" }}
                      className="rounded-md"
                      size="small"
                      fullWidth="true"
                    />
                  </TableCell>
                  <TableCell align="left">
                    <TextField
                      sx={{ backgroundColor: "white" }}
                      className="rounded-md"
                      size="small"
                      fullWidth="true"
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="flex align-center justify-center gap-1 mx-auto mt-2 mb-2">
              <Button fullWidth={false} sx={SaveButtonStyle}>
                Add
              </Button>
              <Button onClick={handleSubmit} fullWidth={false} sx={SaveButtonStyle}>
                Submit
              </Button>
            </div>
          </TableContainer>
        </div>
      </div>
    </Fade>
  );
};
