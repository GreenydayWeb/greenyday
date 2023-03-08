import Header from "./component/header";
import Footer from "./component/footer";
import MenuTo from "../component/menuto";
import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import axios from "axios";
import { backUrl } from "../config/config";
import { useState, useEffect } from "react";
import { LOAD_POSTS_REQUEST } from "../reducers/user";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const [images, setimgurl] = useState([]);
  const [mainPosts, setmenu] = useState([]);
  // const { mainPosts } = useSelector((state) => state.user);

  useEffect(() => {
    // dispatch({
    //   type: LOAD_POSTS_REQUEST,
    // });

    axios.get(backUrl + "/api/main/").then((res) => {
      const events = res.data.events;
      const image = [];

      events.map((url) => {
        image.push(backUrl + url.image);
      });
      setimgurl(image);
      setmenu(res.data.items);
    });
  }, []);

  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));
  return (
    <div class="bg-[#ECE4D7]">
      <div>
        <div class="">
          <Header class="z-50" />
        </div>

        <div class="">
          <div class="mt-10 ">
            <Carousel
              controlSize={72}
              sx={{ maxWidth: 1200 }}
              mx="auto"
              withIndicators={true}
            >
              {slides}
            </Carousel>
          </div>
        </div>
      </div>
      <div class="flex flex-col place-items-center mt-10 ">
        <div class="w-[1200px] text-[30px] font-semibold  mb-10">
          Today's Menu
        </div>

        <div class="grid gap-14 lg:grid-cols-4 lg:grid-rows-1 grid-rows-2 grid-cols-2">
          {mainPosts.map((m, index) => (
            <MenuTo menus={m} key={index} />
          ))}
        </div>
        <div class="w-[1200px] m-5 mt-24 flex justify-between">
          <a href="/home">
            <img src="/nutriinfo.png " />
          </a>
          <a class="/home ">
            <img src="/outside.png " />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// breakpoints={[
//   { maxWidth: 1200, height: 678 },
//   { maxWidth: 1013, height: 571 },
//   { maxWidth: 768, height: 253 },
// ]}

export default Home;
