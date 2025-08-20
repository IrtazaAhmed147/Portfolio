import * as React from "react";
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
import { Link } from "react-scroll";
import CloseIcon from "@mui/icons-material/Close";
const drawerWidth = 240;
const navItems = ["Home", "About", "Projects", "Contact"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{width: '100%',display:'flex', justifyContent:'end'}}>

       <IconButton
              // onClick={handleClose}
              sx={{
                color: "grey.700",
                "&:hover": { color: "black" },
              }}
              >
              <CloseIcon />
            </IconButton>
              </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                primary={
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                    spy={true}
                    style={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "black",
                      fontSize: "1.1rem",
                      fontWeight: "500",
                    }}
                  >
                    {item}
                  </Link>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#fff",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "black",
                  fontWeight: 500,
                  textTransform: "none",
                  mx: 1,
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "primary.main",
                  },
                }}
              >
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  spy={true}
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  {item}
                </Link>
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              display: { sm: "none" },
              backgroundColor: "#959595",
              transition: '0.5s all ease-in-out',
              "&:hover": { backgroundColor: "#4a4a4a" },
              color: "#fff",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <nav >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
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

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
