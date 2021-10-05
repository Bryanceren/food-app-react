import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import "./gradient.css";
import { MenuOutlined } from "@material-ui/icons";

import Meals from "../../assets/breakfast_fruit_juice_oatmeal_4k_5k_hd_food-1920x1080.jpg";
import NavigationCart from "./NavigationCart";
import NavigationDrawer from "./NavigationDrawer";
export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(false);

  return (
    <React.Fragment>
      <NavigationDrawer setAnchorEl={setAnchorEl} anchorEl={anchorEl} />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" sx={{ bgcolor: "error.main" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => {
                setAnchorEl(true);
              }}
            >
              <MenuOutlined />
            </IconButton>
            <Typography
              fontWeight="bold"
              component="div"
              sx={{ flexGrow: 1, fontSize: { sm: "h5.fontSize" } }}
            >
              React Meals
            </Typography>

            <NavigationCart />
          </Toolbar>
        </AppBar>
        <Box className="pickgradient">
          <img
            src={Meals}
            alt="comida"
            style={{
              width: "100%",
              maxHeight: "500px",
              objectFit: "cover",
              opacity: 0.8,
              zIndex: -1,
              display: "block",
              position: "relative",
            }}
          />
        </Box>
      </Box>
    </React.Fragment>
  );
}
