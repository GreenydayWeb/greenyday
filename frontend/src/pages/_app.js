import wrapper from "../store/configureStore";
import "../../styles/globals.css";
import { useEffect } from "react";

function App({ Component, pageProps }) {
  useEffect(() => {
    import("flowbite");
  }, []);

  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
