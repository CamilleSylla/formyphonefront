import Nav from "../components/global/nav/Nav";
import "../styles/globals.css";
import { CartProvider } from "../context/CartContext";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <CartProvider>
        <Nav />
        <Component {...pageProps} />
      </CartProvider>
    </>
  );
}

export default MyApp;
