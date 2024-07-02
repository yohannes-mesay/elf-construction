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
import { NavLink } from "react-router-dom";

const drawerWidth = 200;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const homeHandler = () => {};
  const companyHandler = () => {};
  const departmentHandler = () => {};
  const serviceHandler = () => {};
  const contactHandler = () => {};
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
            <ListItemText primary="Company" onClick={companyHandler} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText
              primary="Out Department"
              onClick={departmentHandler}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Services" onClick={serviceHandler} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText onClick={contactHandler} primary="Contact" />
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
        zIndex: "15",
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
          backgroundColor: "#23282d",
          boxShadow: "none",
        }}
      >
        <Toolbar
          style={{
            display: "flex",
            position: "relative",
            left: "0px",
            justifyContent: "center",
          }}
        >
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
              left: { sm: "10%", md: "40%" },
            }}
          >
            <Button
              onClick={homeHandler}
              sx={{
                color: "aliceblue",
                fontWeight: "600",
                letterSpacing: "0em",
                "&:hover": {
                  color: "#1c6ce4",
                  backgroundColor: "transparent",
                },
              }}
            >
              <NavLink to="/">Home</NavLink>
            </Button>
            <Button
              onClick={companyHandler}
              sx={{
                color: "aliceblue",
                fontWeight: "600",
                letterSpacing: "0em",
                "&:hover": {
                  color: "#1c6ce4",
                  backgroundColor: "transparent",
                },
              }}
            >
              <NavLink to="/about">about us</NavLink>
            </Button>
            <Button
              onClick={departmentHandler}
              sx={{
                color: "aliceblue",
                fontWeight: "600",
                "&:hover": {
                  color: "#1c6ce4",
                  backgroundColor: "transparent",
                },
              }}
            >
              <NavLink to="department">Our Department</NavLink>
            </Button>
            <Button
              onClick={serviceHandler}
              sx={{
                color: "aliceblue",
                fontWeight: "600",
                "&:hover": {
                  color: "#1c6ce4",
                  backgroundColor: "transparent",
                },
              }}
            >
              <NavLink to="services">services </NavLink>
            </Button>

            <Button
              onClick={contactHandler}
              sx={{
                color: "aliceblue",
                fontWeight: "600",
                "&:hover": {
                  color: "#1c6ce4",
                  backgroundColor: "transparent",
                },
              }}
            >
              <NavLink to="contact">contact </NavLink>
            </Button>
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
