import "../styles/globals.css";
import NoSSr from "../components/NoSsr";

function MyApp({ Component, pageProps }) {
  return (
    <NoSSr>
      <Component {...pageProps} />
    </NoSSr>
  );
}

export default MyApp;
