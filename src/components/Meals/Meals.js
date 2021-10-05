import { Box, Card, CardContent, List, Typography } from "@mui/material";
import { Fragment } from "react";
import MealItem from "./MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const Meals = (props) => {
  return (
    <Fragment>
      <Box justifyContent="center" paddingX={{ xs: 1, sm: 0 }}>
        <Card
          sx={{ maxWidth: 400, mt: -10, mx: "auto", position: "relative" }}
          color="primary"
        >
          <CardContent>
            <Typography
              gutterBottom
              sx={{ fontSize: { xs: "h6.fontSize", sm: "h4.fontSize" } }}
              textAlign="center"
              component="div"
            >
              Delicious Food Delivered to you
            </Typography>
            <Typography variant="body2"></Typography>
          </CardContent>
        </Card>
        <List sx={{ maxWidth: { md: "60%", xs: "90%" }, mx: "auto", my: 5 }}>
          {DUMMY_MEALS.map((meal) => {
            return <MealItem meal={meal} key={meal.id} />;
          })}
        </List>
      </Box>
    </Fragment>
  );
};
export default Meals;
