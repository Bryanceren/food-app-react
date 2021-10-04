import { Add, Remove } from "@material-ui/icons";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  List,
  Typography,
} from "@mui/material";
import { amber, red } from "@mui/material/colors";
import { Fragment } from "react";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItems = (
    <List>
      {cartCtx.items.map((item) => (
        <Fragment key={item.id}>
          <CartItem name={item.name} price={item.price} amount={item.amount} />
          <Divider sx={{borderColor:red[900]}}/>
        </Fragment>
      ))}
    </List>
  );
  return (
    <Dialog
      disableEscapeKeyDown
      open={props.open}
      onClose={props.handleClose}
      onBackdropClick={() => {}}
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
export default Cart;
