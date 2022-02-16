import { Add } from "@material-ui/icons";
import {
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { amber, red } from "@mui/material/colors";
import { Fragment, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from '../../store/cartStore';
const MealItem = (props) => {
  const dispatch = useDispatch();

  const amountRef = useRef();
  const [amountvalid, setamountvalid] = useState(true);
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
    } else {
      if (!amountvalid) {
        setamountvalid(true);
      }
    }
    dispatch(cartActions.add({
      id: props.meal.id,
      name: props.meal.name,
      amount: enteredAmountNumber,
      price: props.meal.price,
    }))
  };
  return (
    <Fragment>
      <ListItem>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography fontWeight="bold"> {props.meal.name}</Typography>
            <Typography color="text.secondary" fontStyle="italic">
              {props.meal.description}
            </Typography>
            <Typography color={amber[700]} fontWeight="bold">
              {props.meal.price}
            </Typography>
          </Grid>
          <Grid item
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
            xs={12}
            sm={6}
          >
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
          </Grid>
        </Grid>
      </ListItem>
      <Divider />
    </Fragment>
  );
};
export default MealItem;
