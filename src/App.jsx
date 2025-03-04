import Cart from "./components/cart";
import Header from "./components/header";
import Meals from "./components/meals";
import { CartContextProvider } from "./store/cart-context";
import { UserProgressContextProvider } from "./store/user-progress-context";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
