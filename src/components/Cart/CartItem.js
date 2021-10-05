import { Add, Remove } from "@material-ui/icons";
import {
  Box,
  Grid,
  IconButton,
  ListItem,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";

const CartItem = (props) => {
  return (
    <ListItem>
      <Grid container paddingY={1}>
        <Grid item xs={6}>
          <Typography fontWeight="bold">{props.name}</Typography>
          <Box display="inline-flex">
            <Typography color={red[900]} >{`$${props.price.toFixed(
              2
            )}`}</Typography>
            <Typography
              px={0.5}
              ml={5}
              borderRadius={1}
              boxShadow={1}
            >{`x${props.amount}`}</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={props.onAdd}>
              <Add />
            </IconButton>
            <IconButton onClick={props.onRemove}>
              <Remove />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </ListItem>
  );
};
export default CartItem;
