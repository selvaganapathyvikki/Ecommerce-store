import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function banner() {
  return (
    <div className="relative w-full lg:w-full md:w-full sm:w-full mx-auto mt-2">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            loading="lazy"
            src="https://raw.githubusercontent.com/selvaganapathyvikki/image-store/main/Banner1.png"
            alt="This is a banner image"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://raw.githubusercontent.com/selvaganapathyvikki/image-store/main/Banner2.png"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default banner;
