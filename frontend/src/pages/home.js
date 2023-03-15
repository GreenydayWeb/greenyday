import Header from "../components/header";
import Footer from "../components/footer";
import MenuTo from "../components/menuto";
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
    axios.get(backUrl + "/api/main/").then((res) => {
      const events = res.data.events;
      const image = [];

      events.map((url) => {
        image.push(backUrl + url.image);
      });
      setimgurl(image);
      setmenu(res.data.items);
      console.log(res.data);
    });
  }, []);

  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));
  return (
    <div class="bg-[#ECE4D7] overflow-x-hidden">
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

        <div class=" grid lg:grid-cols-2 lg:grid-rows-1 gap-20 grid-rows-2 grid-cols-1 mt-10">
          <a href="/home">
            <div class=" grid lg:w-[500px] w-[400px] h-[267px] border-2 border-[#554407] rounded-[45px] p-3">
              <div class=" place-self-center ">
                <div class="flex flex-col items-center">
                  <p class="text-[#554407] text-[30px] font-bold text-center pb-3 ">
                    GREENY DAY’S <br />
                    NUTRITION
                  </p>
                  <p class=" pb-3 text-[20px]">그리니데이의 건강한 영양정보</p>
                  <p class="text-[#554407] text-[20px] font-bold"> 둘러보기</p>
                </div>
              </div>
            </div>
          </a>
          <a href="/about ">
            <img class=" w-[500px] h-[267px] " src="/outside.png " />
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
