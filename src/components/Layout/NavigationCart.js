import { ShoppingCart } from "@material-ui/icons";
import { Button, Chip, Typography } from "@mui/material";
import { Fragment, useCallback, useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Cart from "../Cart/Cart";
import {useSelector} from 'react-redux'
const NavigationCart = (props) => {
  const cartState = useSelector(state => state.cart);

  const cartItemsQty = cartState.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const [open, setOpen] = useState(false);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  },[]);

  const handleClose = useCallback((event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  },[]);
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
