import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import testimonialData from "../../testimonial-data";

import Link from "next/link";

export default function TestimonialsSection() {
  return (
    <div className="h-fit relative">
      <Carousel
        autoPlay={false}
        interval={3000}
        infiniteLoop={true}
        swipeable={true}
        showArrows={false}
        showStatus={false}
        emulateTouch={true}
        stopOnHover={true}
        useKeyboardArrows={true}
      >
        {testimonialData.map((testimonial, index) => (
          <Testimonial {...testimonial} key={`testimonial-${index}`} />
        ))}
      </Carousel>
    </div>
  );
}

function Testimonial({
  first_name,
  last_name,
  relationship,
  occupation,
  testimonial,
  img,
}) {
  return (
    <div className="h-full w-full px-10 md:px-24">
      <div className="h-full max-w-screen-xl md:grid md:grid-cols-[28rem_1fr] bg-lightBgSecondaryColor dark:bg-bgSecondaryColor mx-auto rounded-lg overflow-hidden">
        <div className="relative h-[85vw] md:h-full md:w-[28rem] flex justify-center items-center overflow-hidden">
          <div
            className="w-full h-full flex justify-center items-center blur-sm bg-cover bg-center brightness-50"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <img src={img} className="absolute m-auto inset-0 w-3/4" />
        </div>
        <div className="p-12 flex justify-center items-center my-auto">
          <div className="my-auto">
            <div className="text-base text-lightTextColor dark:text-white text-left">
              {relationship}
            </div>
            <div className="mt-4 text-lightTextColor dark:text-white text-5xl text-left">
              {first_name} {last_name}
            </div>
            <div className="mt-4 text-5xl text-border text-left">
              {occupation}
            </div>
            <div className="mt-6 text-xl leading-8 text-lightTextColor dark:text-white text-left">
              {testimonial}
            </div>
            <div className="mt-6 text-xl leading-8 text-lightTextColor dark:text-white text-left">
              This is totally real,{" "}
              <Link
                href="https://www.linkedin.com/in/jaagrav/details/recommendations/"
                target="_blank"
              >
                <a className="transition text-pink hover:underline underline-offset-8">
                  look here for proof.
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
