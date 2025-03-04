import Header from "./components/header";
import Meals from "./components/meals";
import { CartContextProvider } from "./store/cart-context";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Meals />
    </CartContextProvider>
  );
}

export default App;
