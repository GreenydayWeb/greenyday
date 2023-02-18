import Header from "./component/header";
import Footer from "./component/footer";
import MenuTo from "./component/menuto";
import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import axios from "axios";
import { backUrl } from "../config/config";
import { useState, useEffect } from "react";

function Home() {
  const [images, setimgurl] = useState([]);
  const [menu, setmenu] = useState([]);

  useEffect(() => {
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
          {menu.map((m) => {
            return (
              <div>
                <MenuTo menu={m} />
              </div>
            );
          })}
        </div>
        <div class=" grid  grid-rows-1 grid-flow-col gap-4">
          <div class=" col-span-1 flex flex-col pt-[40px] place-items-center  rounded-[80px] shadow border-[#554407] border-[2px] ">
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
          <div class="col-span-2">
            <img
              class=" opacity-50 rounded-[80px] border-2  border-[#000000] border-opacity-100"
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
