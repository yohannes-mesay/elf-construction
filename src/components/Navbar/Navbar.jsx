import React from "react";
import { useState, useContext } from "react";
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
  const homehandler = () => {};
  const discussionHandler = () => {};
  const ResourcesHandler = () => {};
  const QuestionsHandler = () => {};
  const loginhandler = () => {};
  const profielehandler = () => {};
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Home" onClick={homehandler} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Discussion" onClick={discussionHandler} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Resources" onClick={ResourcesHandler} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Questions" onClick={QuestionsHandler} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText onClick={loginhandler} primary="Login" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText onClick={profielehandler} primary="Profile" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", backgroundColor: "white",position:"sticky" }}>
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
          marginTop: "10px",
        }}
      >
        <Toolbar>
          <IconButton
            color="Black"
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
              onClick={homehandler}
              sx={{
                color: "aliceblue",
                fontWeight: "bold",
                letterSpacing: "0em",
              }}
            >
              Home
            </Button>
            <Button
              onClick={discussionHandler}
              sx={{
                color: "aliceblue",
                fontWeight: "bold",
                letterSpacing: "0em",
              }}
            >
              Company
            </Button>
            <Button
              onClick={ResourcesHandler}
              sx={{ color: "aliceblue", fontWeight: "bold" }}
            >
              Our Department
            </Button>
            <Button
              onClick={QuestionsHandler}
              sx={{ color: "aliceblue", fontWeight: "bold" }}
            >
              Services
            </Button>
            <Button
              onClick={QuestionsHandler}
              sx={{ color: "aliceblue", fontWeight: "bold" }}
            >
              Contact
            </Button>
           
            {localStorage.isLogin ? (
              <Button onClick={profielehandler} sx={{ color: "#ff" }}>
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

export default Navbar;
