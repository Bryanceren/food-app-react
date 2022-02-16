import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  List,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { Fragment, memo } from "react";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from "../../store/cartStore";
const Cart = (props) => {
  console.log('soy el carrito y me acabo de renderizar');
  const cartState = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalAmount = `$${cartState.totalAmount.toFixed(2)}`;
  const hasItems = cartState.items.length > 0;

  const cartItemAddHandler = (item) => {
    dispatch(cartActions.add({ ...item, amount: 1 }));
  };
  const cartItemRemoveHandler = (id) => {
    dispatch(cartActions.remove(id));
  };
  const cartItems = (
    <List>
      {cartState.items.map((item) => (
        <Fragment key={item.id}>
          <CartItem
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />
          <Divider sx={{ borderColor: red[900] }} />
        </Fragment>
      ))}
    </List>
  );
  return (
    <Dialog
      disableEscapeKeyDown
      open={props.open}
      onClose={props.handleClose}
      onBackdropClick={() => { }}
      fullWidth={true}
      maxWidth="sm"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <Typography fontSize="h4.fontSize">Cart</Typography>
      </DialogTitle>
      <Divider />
      <DialogContent>{cartItems}</DialogContent>
      <DialogActions>
        <Button
          onClick={props.handleClose}
          color="error"
          sx={{ fontWeight: "bold", textTransform: "none" }}
        >
          Close
        </Button>
        {hasItems && (
          <Button
            onClick={props.handleClose}
            color="error"
            variant="contained"
            sx={{ fontWeight: "bold", textTransform: "none" }}
          >
            {"Order " + totalAmount}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};
export default memo(Cart);
