import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Link} from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  buttonColor,
  pageHeading,
  SaveButtonStyle,
} from "components/Display/feutures";
import { Size } from "media-query";
import Cookies from "universal-cookie";
import { API_IP } from "components/API/API";

const cookies = new Cookies();
const axios = require("axios");

export const Login = ({ setJWT }) => {
  /*State change variables*/
  const [user_name, setUser_name] = useState("");
  const [password, setPassword] = useState("");
  /*function variables */
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const size = Size();

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const handleUserNameInput = (e) => {
    setUser_name(e.target.value);
  };
  const handleUserPasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handlePost = () => {
    setLoading(true);
    axios
      .post("http://" + API_IP + "/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        user_details: {
          username: user_name,
          password: password,
        },
      })
      .then(function (response) {
        if (response.data != null) {
          cookies.set("Token", response.data.JWT);
          cookies.set("User_id", response.data.user_id);
          cookies.set("Username",user_name);
          cookies.set("Password",password);
          setJWT(true);
        } else {
          cookies.set("Token", "Not Authorised");
        }
      })
      .then(function () {
        setLoading(false);
      })
      .catch(function (error) {
        setError("Request Error !!!");
        setLoading(false);
        window.location.reload();
      });
  };

  if (error) {
    <div>{error}</div>;
  }

  return (
    <div>
      {loading ? (
        <div
          style={{ color: pageHeading }}
          className="h-screen flex items-center justify-center"
        >
          Loading ...
        </div>
      ) : (
        <>
          {size == "MD" || size == "SM" || size == "XS" ? (
            <div
              style={{ color: pageHeading, marginTop: "30%" }}
              className="flex justify-center"
            >
              <div className="flex rounded shadow-md p-10">
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, maxWidth: "25ch" },
                  }}
                  noValidate
                  autoComplete="on"
                >
                  <div className="flex align-center justify-center">
                    <TextField
                      color="error"
                      onChange={handleUserNameInput}
                      sucess
                      fullWidth="true"
                      id="outlined-error-helper-text"
                      label="Username"
                    />
                  </div>
                  <div className="flex align-center justify-center">
                    <TextField
                      color="error"
                      onChange={handleUserPasswordInput}
                      sucess
                      fullWidth="true"
                      id="outlined-error-helper-text"
                      label="Password"
                    />
                  </div>
                  {size == "MD" || size == "SM" || size == "XS" ? (
                    <div className="grid grid-rows-1 p-2">
                      <Link activeClassName="is-active" to={"/Dashboard"}>
                        <Button
                          sx={SaveButtonStyle}
                          variant="outlined"
                          onClick={handlePost}
                          size="small"
                          fullWidth="true"
                        >
                          <div clasName="text-md font-bold">Login</div>
                        </Button>
                      </Link>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-1 p-2">
                      <Button
                        sx={{ color: buttonColor, mt: 3, mx: "auto" }}
                        variant="outlined"
                        size="large"
                        fullWidth="true"
                        onClick={handlePost}
                      >
                        <Link activeClassName="is-active" to={"/Dashboard"}>
                          <div clasName="text-md font-bold">Login</div>
                        </Link>
                      </Button>
                    </div>
                  )}
                </Box>
              </div>
            </div>
          ) : (
            <div
              style={{ color: pageHeading, marginTop: "10%" }}
              className="flex justify-center"
            >
              <div className="flex rounded shadow-md p-10">
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, maxWidth: "25ch" },
                  }}
                  noValidate
                  autoComplete="on"
                >
                  <div className="flex align-center justify-center">
                    <TextField
                      color="error"
                      onChange={handleUserNameInput}
                      sucess
                      fullWidth="true"
                      id="outlined-error-helper-text"
                      label="Username"
                    />
                  </div>
                  <div className="flex align-center justify-center">
                    <TextField
                      color="error"
                      onChange={handleUserPasswordInput}
                      sucess
                      fullWidth="true"
                      id="outlined-error-helper-text"
                      label="Password"
                    />
                  </div>
                  {size == "MD" || size == "SM" || size == "XS" ? (
                    <div className="grid grid-rows-1 p-2">
                      <Button
                        sx={{ color: buttonColor, mt: 3, mx: "auto" }}
                        variant="outlined"
                        onClick={handlePost}
                        size="medium"
                        fullWidth="true"
                      >
                        <Link activeClassName="is-active" to={"/Dashboard"}>
                          <div clasName="text-md font-bold">Login</div>
                        </Link>
                      </Button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-1 p-2">
                      <Button
                        sx={SaveButtonStyle}
                        variant="outlined"
                        size="medium"
                        fullWidth="true"
                        onClick={handlePost}
                      >
                        <Link activeClassName="is-active" to={"/Dashboard"}>
                          <div clasName="text-md font-bold">Login</div>
                        </Link>
                      </Button>
                    </div>
                  )}
                </Box>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
