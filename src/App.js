import { Provider } from "react-redux";
import MenuAppBar from "./components/Layout/Navigation";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import {store} from './store/cartStore'
function App() {
  return (
    <Provider store={store}>
      <MenuAppBar/>
      <Meals/>
    </Provider>
  );
}

export default App;
