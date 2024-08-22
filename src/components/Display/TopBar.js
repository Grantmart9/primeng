import React, { useState, useEffect, useCallback } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import logo from "Images/logo.png";
import Cookies from "universal-cookie";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import Logo2 from "Images/Logo2.png";
import LogoG from "Images/LogoG.png";
import {
  Background1,
  Background2,
  fontType,
  SaveButtonStyle,
} from "components/Display/feutures";
const cookies = new Cookies();

const pages = [
  "HOME",
  "ABOUT US",
  "WHAT WE DO",
  "PORTAL",
  "MEDIA",
  "EVENTS",
  "HOW TO",
  "CONTACT US",
];

export const TopBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [TopBarOn, setTopBarOn] = useState(false);
  const [TopBarOff, setTopBarOff] = useState(false);

  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setTopBarOn(false);
        setTopBarOff(true);
      } else if (y < window.scrollY) {
        setTopBarOn(true);
        setTopBarOff(false);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      {TopBarOn ? (
        <div>
          <AppBar
            position="fixed"
            elevation={0}
            sx={{
              backgroundColor: Background2,
              opacity: "100%",
              maxHeight: "5rem",
            }}
          >
            <Container maxWidth="false">
              <Toolbar disableGutters>
                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    <div className="grid grid-flow-rown gap-1">
                      {pages.map((page) => (
                        <Button
                          key={page}
                          href={page}
                          onClick={handleCloseNavMenu}
                        >
                          <div sx={{ fontFamily: fontType }}>
                            <div
                              style={{
                                fontFamily: "Times New Roman Times serif",
                              }}
                            >
                              {page}
                            </div>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </Menu>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  <Slide direction="down" in={true} timeout={1200}>
                    <img src={LogoG} />
                  </Slide>
                  {pages.map((page) => (
                    <Fade in={true} timeout={1200}>
                      <Button
                        key={page}
                        sx={{ my: 2, color: "white", display: "block" }}
                        href={page}
                      >
                        <div className="text-sm">{page}</div>
                      </Button>
                    </Fade>
                  ))}
                  <Box sx={{ my: 1.75 }}>
                    <Fade in={true} timeout={1200}>
                      <Button sx={{ color: "white" }} href="/Registration">
                        Login
                      </Button>
                    </Fade>
                  </Box>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </div>
      ) : (
        <Fade in={true} timeout={1200}>
          <AppBar
            position="fixed"
            elevation={0}
            sx={{
              backgroundColor: "transparent",
              opacity: "100%",
              maxHeight: "5rem",
            }}
          >
            <Container maxWidth="false">
              <Toolbar disableGutters>
                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    <div className="grid grid-flow-rown gap-1">
                      {pages.map((page) => (
                        <Button
                          key={page}
                          href={page}
                          onClick={handleCloseNavMenu}
                        >
                          <div sx={{ fontFamily: fontType }}>
                            <div
                              style={{
                                fontFamily: "Times New Roman Times serif",
                              }}
                            >
                              {page}
                            </div>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </Menu>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  <Slide direction="down" in={true} timeout={1200}>
                    <img src={Logo2} />
                  </Slide>
                  {pages.map((page) => (
                    <Fade in={true} timeout={1200}>
                      <Button
                        key={page}
                        sx={{ my: 2, color: "white", display: "block" }}
                        href={page}
                      >
                        <div className="text-sm">{page}</div>
                      </Button>
                    </Fade>
                  ))}
                  <Box sx={{ my: 1.75 }}>
                    <Fade in={true} timeout={1200}>
                      <Button sx={{ color: "white" }} href="/Registration">
                        Login
                      </Button>
                    </Fade>
                  </Box>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </Fade>
      )}
    </>
  );
};
