import Header from "./component/header";
import { Carousel } from "@mantine/carousel";
import { Center, AspectRatio, Image, MediaQuery, Space } from "@mantine/core";

const images = ["/event4.jpg", "/event4.jpg", "/event5.jpg"];

function Home() {
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
          <Carousel sx={{ maxWidth: 1200 }} mx="auto" withIndicators={true}>
            {slides}
          </Carousel>
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
