import wrapper from "../store/configureStore";
import "../../styles/globals.css";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
