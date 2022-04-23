import Nav from "../components/global/nav/Nav";
import "../styles/globals.css";
import { CartProvider } from "../context/CartContext";
import { UserProvider } from "../context/UserContext";
import { CookiesProvider } from "react-cookie";
import { MenuProvider } from "../context/MenuContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <MenuProvider>
      <CookiesProvider>
        <CartProvider>
          <UserProvider>
            <Nav />
            <Component {...pageProps} />
          </UserProvider>
        </CartProvider>
      </CookiesProvider>
    </MenuProvider>
    </>
  );
}

export default MyApp;
