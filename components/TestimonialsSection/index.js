import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import testimonialData from "../../testimonial-data";

import Link from "next/link";

import { FiLinkedin } from "react-icons/fi";

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
  link,
}) {
  return (
    <div className="h-full w-full px-10 md:px-32">
      <div className="pb-12 h-full max-w-screen-xl grid md:grid-cols-[28rem_1fr] gap-12 mx-auto rounded-lg">
        <div className="relative w-full h-auto flex justify-center items-center">
          <img src={img} className="w-full rounded-3xl shadow-xl" />
        </div>
        <div className="flex justify-center items-center my-auto">
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
              <span>{"Check out "}</span>
              <Link href={link}>
                <a className="transition text-indigo hover:underline underline-offset-8">
                  {first_name} {last_name} on LinkedIn
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
