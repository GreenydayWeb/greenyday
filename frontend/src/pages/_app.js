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
        <title>GreenyDay</title>
        <meta
          name="description"
          content="당신의 하루에 건강함을 채워 줄 샐러드 전문 브랜드 GREENDAY 입니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/mainimg.jpg" />
        <link rel="icon" href="/logo_grd.png" />
      </Helmet>
      <Component {...pageProps} />
    </div>
  );
}

export default wrapper.withRedux(App);
