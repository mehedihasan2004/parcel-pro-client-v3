import React from "react";
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
import { useAuthContext } from "../contexts/AuthProvider";

const drawerWidth = 240;

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { logout, user, navigate } = useAuthContext();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box s onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Coffee-CUP
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={`Home`} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={`About Us`} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={`Contact`} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={`Blog`} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={`Login`} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            onClick={() => navigate("/")}
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                sm: "block",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "2rem",
              },
            }}
          >
            Parcel Pro
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <NavLink to="/">
              <Button style={{ color: "#ffffff", textDecoration: "none" }}>
                Home
              </Button>
            </NavLink>
            <NavLink to="/about_us">
              <Button sx={{ color: "#ffffff" }}>About Us</Button>
            </NavLink>
            <NavLink to="/about_us_careers">
              <Button sx={{ color: "#ffffff" }}>Careers</Button>
            </NavLink>
            <NavLink to="/contact">
              <Button sx={{ color: "#ffffff" }}>Contact</Button>
            </NavLink>
            <NavLink to="/dashboard">
              <Button sx={{ color: "#ffffff" }}>Dashboard</Button>
            </NavLink>

            <NavLink to="/blog">
              <Button sx={{ color: "#ffffff" }}>Blog</Button>
            </NavLink>
            {user ? (
              <NavLink onClick={logout} to="/">
                <Button sx={{ color: "#ffffff" }}>Logout</Button>
              </NavLink>
            ) : (
              <NavLink to="/login">
                <Button sx={{ color: "#ffffff" }}>Login</Button>
              </NavLink>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
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
      </Box>
    </Box>
  );
};

export default Navbar;
