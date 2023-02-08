import Header from "./component/header";
import Footer from "./component/footer";
import Menu from "./component/menu";
import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import axios from "axios";
import { backUrl } from "../config/config";
import { useState, useEffect } from "react";

function Home() {
  const [images, setimgurl] = useState([]);
  const [menu, setmenu] = useState([]);

  useEffect(() => {
    axios.get(backUrl + "/main/").then((res) => {
      const events = res.data.envets;
      const image = [];

      events.map((url) => {
        image.push(backUrl + url.image);
      });
      setimgurl(image);
      setmenu(res.data.items);
      // console.log(res.data.items);

      // console.log(res.data.items);
    });
  }, []);

  console.log(menu);

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
        {/* <div class="md:w-[1200px] md:flex md:justify-between ">
          <Menu />
          <Menu />
          <Menu />
          <Menu />
        </div> */}
        <div class="md:w-[1200px] md:flex md:justify-between">
          {menu.map((m) => {
            return (
              <div>
                <Menu menu={m} />
              </div>
            );
          })}
        </div>
        <div class=" md:flex justify-between md:w-[1200px] md:my-[60px]">
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
              class=" w-[750px] h-[320px] opacity-50 rounded-[80px] border-2  border-[#000000] border-opacity-100"
              src="/outside.png "
            />
          </div>
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
