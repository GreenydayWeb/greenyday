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
        <div class="w-[1200px] flex justify-between">
          <a class="  w-1/3   ">
            <img class=" " src="/nutriinfo.png " />
          </a>
          <div class=" ">
            <img class=" " src="/outside.png " />
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
