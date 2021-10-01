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
import { Fragment } from "react";

const MealItem = (props) => {
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
                sx={{ maxWidth: 100 }}
                variant="standard"
                defaultValue="1"
              />
            </ListItem>
            <ListItem 
            >
              <Button
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
          </List>
        </ListItemText>
      </ListItem>
      <Divider />
    </Fragment>
  );
};
export default MealItem;
