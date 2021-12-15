import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function banner() {
  return (
    <div className="relative w-full lg:w-4/5 md:w-full sm:w-full h-32 mx-auto mt-2">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            loading="lazy"
            src="https://raw.githubusercontent.com/selvaganapathyvikki/image-store/main/banimg1.jpg"
            alt="This is a banner image"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://raw.githubusercontent.com/selvaganapathyvikki/image-store/main/banimg2.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default banner;
