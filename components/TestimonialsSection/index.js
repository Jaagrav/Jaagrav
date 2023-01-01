import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import testimonialData from "../../testimonial-data";

import Link from "next/link";

export default function TestimonialsSection() {
  return (
    <div className="h-fit relative pb-6">
      <AliceCarousel
          infinite
          autoWidth
          autoHeight
          mouseTracking
          ssrSilentMode
          touchTracking
          disableButtonsControls
      >
        {testimonialData.map((testimonial, index) => (
          <Testimonial {...testimonial} key={`testimonial-${index}`} />
        ))}
      </AliceCarousel>
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
    <div className="px-10 md:px-32 cursor-grab active:cursor-grabbing">
      <div className="max-w-screen-xl md:grid md:grid-cols-[auto_1fr] gap-12 mx-auto rounded-xl select-none">
        <span className="relative h-full h-auto flex justify-center items-center">
          <div
            className="h-[30rem] w-full md:w-[30rem] bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        </span>
        <div className="h-full py-12 md:py-0 flex justify-center items-start flex-col">
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
  );
}
