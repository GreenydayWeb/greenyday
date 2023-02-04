import Header from "./component/header";
import { Carousel } from "@mantine/carousel";
import { Center, AspectRatio, Image, MediaQuery, Space } from "@mantine/core";

function Home() {
  return (
    <div class="bg-[#ECE4D7]">
      <div>
        <Header />
        <div class="mt-10 w-1000 h-1000">
          <Center>
            <Carousel
              slideSize="50%"
              withIndicators={true}
              controlSize={72}
              breakpoints={[
                { maxWidth: 1200, height: 678 },
                { maxWidth: 1013, height: 571 },
                { maxWidth: 768, height: 253 },
              ]}
            >
              <Carousel.Slide>
                {/* <AspectRatio ratio={16 / 9}> */}
                <Image fit="contain" src="/event3.jpg" />
                {/* </AspectRatio> */}
              </Carousel.Slide>
              <Carousel.Slide>
                {" "}
                {/* <Image fit="contain" src="/event3.jpg" /> */}
              </Carousel.Slide>

              <Carousel.Slide>
                <Image fit="contain" src="/event3.jpg" />
              </Carousel.Slide>
              {/* ...other slides */}
            </Carousel>{" "}
          </Center>
        </div>
      </div>
    </div>
  );
}

export default Home;
