import { ShoppingCart } from "@material-ui/icons";
import { Button, Chip, Typography } from "@mui/material";
import { Fragment } from "react";

const NavigationCart = (props) => {
  return (
    <Fragment>
      <Button
        sx={{
          bgcolor: "#b71c1c",
          color: "white",
          textTransform: "none",
          borderRadius: 10,
          padding: 1,
          paddingX: 3,
          gap: 1,
          display: "inline-flex",
        }}
      >
        <ShoppingCart />
        <Typography fontWeight="bold" sx={{display:{xs:'none',sm:'block'}}}>Your Cart</Typography>
        <Chip
          sx={{ bgcolor: "red", color: "white", fontWeight: "bold" }}
          size="small"
          label="0"
        />
      </Button>
    </Fragment>
  );
};
export default NavigationCart;
