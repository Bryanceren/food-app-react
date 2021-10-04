import MenuAppBar from "./components/Layout/Navigation";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <MenuAppBar/>
      <Meals/>
    </CartProvider>
  );
}

export default App;
