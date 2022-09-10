import "../styles/globals.css";
import NoSSr from "../components/NoSsr";
import StoreProvider from "../context/store";

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <NoSSr>
      <Component {...pageProps} />
     </NoSSr>
    </StoreProvider>
  );
}

export default MyApp;
