import Nav from "../components/global/nav/Nav";
import "../styles/globals.css";
import { CartProvider } from "../context/CartContext";
import { UserProvider } from "../context/UserContext";
import { CookiesProvider } from "react-cookie";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CookiesProvider>
        <CartProvider>
          <UserProvider>
            <Nav />
            <Component {...pageProps} />
          </UserProvider>
        </CartProvider>
      </CookiesProvider>
    </>
  );
}

export default MyApp;
