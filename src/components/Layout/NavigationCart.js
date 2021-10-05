import { ShoppingCart } from "@material-ui/icons";
import { Button, Chip, Typography } from "@mui/material";
import { Fragment, useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Cart from "../Cart/Cart";

const NavigationCart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItemsQty = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };
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
        onClick={handleClickOpen}
      >
        <ShoppingCart />
        <Typography
          fontWeight="bold"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Your Cart
        </Typography>
        <Chip
          sx={{ bgcolor: "red", color: "white", fontWeight: "bold" }}
          size="small"
          label={cartItemsQty}
        />
      </Button>
      <Cart open={open} handleClose={handleClose} />
    </Fragment>
  );
};
export default NavigationCart;
