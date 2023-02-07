import Header from "./component/header";
import Menu from "./component/menu";
import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import axios from "axios";
import { backUrl } from "../config/config";
import { useState, useEffect } from "react";

const images = ["/event4.jpg", "/event4.jpg", "/new_event.jpeg"];

function Home() {
  const [imgurl, setimgurl] = useState({});

  useEffect(() => {
    axios.get(backUrl + "/main/").then((res) => {
      console.log("event", res.data.envets[0].image);
      console.log("item", res.data.items);
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
        <Header />
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
      <div class="flex flex-col place-items-center mt-10 ">
        <div class="w-[1200px] text-[30px] font-semibold  mb-10">
          Today's Menu
        </div>
        <div class="w-[1200px] flex justify-between ">
          <Menu />
          <Menu />
          <Menu />
          <Menu />
        </div>
        <div class=" flex justify-between w-[1200px] my-[60px]">
          <div class="flex flex-col pt-[40px] place-items-center w-[380px]   h-[320px] rounded-[80px] shadow border-[#554407] border-[2px] ">
            <div class="text-[#554407] text-[30px] font-semibold">
              GREENY DAY’S
            </div>
            <div class="text-[#554407] text-[30px] mb-[20px] font-semibold">
              NUTRITION
            </div>
            <div class="  text-[25px] mb-[20px] font-semibold ">
              그리니데이의 건강한 영양정보
            </div>
            <div class=" text-[#554407] text-[20px] mb-[10px] font-semibold">
              둘러보기
            </div>
          </div>
          <div>
            <img
              class="w-[750px] h-[320px] rounded-[80px]"
              src="/outside.png "
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

// breakpoints={[
//   { maxWidth: 1200, height: 678 },
//   { maxWidth: 1013, height: 571 },
//   { maxWidth: 768, height: 253 },
// ]}

export default Home;
