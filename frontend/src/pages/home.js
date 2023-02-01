import Header from "./component/header";
import { Carousel } from "@mantine/carousel";

function Home() {
  return (
    <div>
      <div class="bg-[#ECE4D7]">
        <Header />
        <Carousel sx={{ maxWidth: 900 }} mx="auto" withIndicators height={400}>
          <Carousel.Slide>1</Carousel.Slide>
          <Carousel.Slide>2</Carousel.Slide>
          <Carousel.Slide>3</Carousel.Slide>
          {/* ...other slides */}
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
