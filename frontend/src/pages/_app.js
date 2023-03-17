import wrapper from "../store/configureStore";
import "../../styles/globals.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

function App({ Component, pageProps }) {
  useEffect(() => {
    import("flowbite");
  }, []);

  return (
    <div>
      <Helmet>
        <title>Greeny Day</title>
        <meta name="description" content="GREENDAY 웹사이트 입니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_grd.png" />
      </Helmet>
      <Component {...pageProps} />
    </div>
  );
}

export default wrapper.withRedux(App);
