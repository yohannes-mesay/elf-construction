import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const drawerWidth = 200;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const homeHandler = () => {};
  const discussionHandler = () => {};
  const resourcesHandler = () => {};
  const questionsHandler = () => {};
  const loginHandler = () => {};
  const profileHandler = () => {};

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Home" onClick={homeHandler} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Discussion" onClick={discussionHandler} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Resources" onClick={resourcesHandler} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Questions" onClick={questionsHandler} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText onClick={loginHandler} primary="Login" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText onClick={profileHandler} primary="Profile" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        boxSizing: "border-box",
        backgroundColor: "white",
        position: "sticky",
        top: "0",
        zIndex: "10",
      }}
    >
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",

          backgroundColor: "#343a40",
          boxShadow: "none",
        }}
      >
        <Toolbar style={{
          display: "flex",
          position:'relative',
          left:"0px",
          justifyContent: "center",
        
        }}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "aliceblue" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            color="Black"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          ></Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              position: "relative",
              left: { sm: "20%", md: "50%" },
            }}
          >
            <Button
              onClick={homeHandler}
              sx={{
                color: "aliceblue",
                fontWeight: "10px",
                letterSpacing: "0em",
                "&:hover": {
                  color: "#1c6ce4",
                  backgroundColor: "transparent",
                },
              }}
            >
              Home
            </Button>
            <Button
              onClick={discussionHandler}
              sx={{
                color: "aliceblue",
                fontWeight: "semibold",
                letterSpacing: "0em",
                "&:hover": {
                  color: "#1c6ce4",
                  backgroundColor: "transparent",
                },
              }}
            >
              Company
            </Button>
            <Button
              onClick={resourcesHandler}
              sx={{
                color: "aliceblue",
                fontWeight: "7px",
                "&:hover": {
                  color: "#1c6ce4",
                  backgroundColor: "transparent",
                },
              }}
            >
              Our Department
            </Button>
            <Button
              onClick={questionsHandler}
              sx={{
                color: "aliceblue",
                "&:hover": {
                  color: "#1c6ce4",
                  backgroundColor: "transparent",
                },
              }}
            >
              Services
            </Button>
            <Button
              onClick={questionsHandler}
              sx={{
                color: "aliceblue",
                fontWeight: "7px",
                "&:hover": {
                  color: "#1c6ce4",
                  backgroundColor: "transparent",
                },
              }}
            >
              Contact
            </Button>

            {localStorage.isLogin ? (
              <Button
                onClick={profileHandler}
                sx={{
                  color: "#fff",
                  "&:hover": {
                    color: "#1c6ce4",
                    backgroundColor: "transparent",
                  },
                }}
              >
                Profile
              </Button>
            ) : null}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
