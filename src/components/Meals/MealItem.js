import { Add } from "@material-ui/icons";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { amber, red } from "@mui/material/colors";
import { Fragment, useContext, useRef, useState } from "react";
import CartContext from "../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const amountRef = useRef();
  const [amountvalid, setamountvalid] = useState(true);
  console.log('¿se renderizo');
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setamountvalid(false);
      return;
    }else{
      if (!amountvalid) {
        setamountvalid(true);
      }
    }

    cartCtx.addItem({
      id: props.meal.id,
      name: props.meal.name,
      amount: enteredAmountNumber,
      price: props.meal.price,
    });
  };
  return (
    <Fragment>
      <ListItem>
        <ListItemText>
          <Typography fontWeight="bold"> {props.meal.name}</Typography>
          <Typography color="text.secondary" fontStyle="italic">
            {props.meal.description}
          </Typography>
          <Typography color={amber[700]} fontWeight="bold">
            {props.meal.price}
          </Typography>
        </ListItemText>
        <ListItemText sx={{ display: "flex", justifyContent: "flex-end" }}>
          <List disablePadding>
            <ListItem disablePadding>
              <TextField
                label="Amount"
                size="small"
                type="number"
                inputRef={amountRef}
                min={0}
                sx={{ maxWidth: 100 }}
                variant="standard"
                defaultValue="1"
              />
            </ListItem>
            <ListItem>
              <Button
                onClick={submitHandler}
                startIcon={<Add />}
                fullWidth
                sx={{
                  bgcolor: red[900],
                  textTransform: "none",
                  borderRadius: 10,
                  fontWeight: "bold",
                }}
                color="error"
                variant="contained"
              >
                Add
              </Button>
            </ListItem>
            {!amountvalid && (
              <ListItem disablePadding>
                <Typography
                  fontSize={13}
                  color="text.secondary"
                  sx={{ display: "inline-block", maxWidth: "120px" }}
                >
                  Please enter a valid amount (1-5)
                </Typography>
              </ListItem>
            )}
          </List>
        </ListItemText>
      </ListItem>
      <Divider />
    </Fragment>
  );
};
export default MealItem;
