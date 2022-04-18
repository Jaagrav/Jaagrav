import {
  GallerySection,
  SubHeader,
  SkillsSection,
  TestimonialsSection,
  ExperienceSection,
} from "../../components";
import Head from "next/head";

export default function About() {
  return (
    <div className="h-fit w-full overflow-hidden pt-24">
      <Head>
        <title>About / Jaagrav</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="px-10 md:px-24 pb-12">
        <div className="grid md:grid-cols-[1fr_0.4fr] max-w-screen-xl mx-auto">
          {/* <div className="block md:hidden">
              <div
                className="relative z-10 bg-contain bg-black bg-no-repeat bg-center w-full h-[50vw]"
                style={{ backgroundImage: "url(/assets/images/jaagrav.png)" }}
              ></div>
            </div> */}
          <div className="mx-auto -translate-y-1/4 mt-12 md:mt-0">
            <h1 className="text-border text-[6rem] md:text-[7rem] whitespace-nowrap opacity-10 translate-y-1/2">
              Jaagrav Seal
            </h1>
            <img
              className="absolute m-auto top-0 bottom-0 left-0 -translate-x-1/2 max-w-none w-[50rem] md:w-[75rem]"
              src="/assets/images/blur-ball-blue.png"
            />
            <div className="relative z-10">
              <h1 className="m-auto bottom-0 text-white text-5xl">
                Jaagrav Seal
              </h1>
              <span className="block text-white mt-8 text-xl leading-10">
                I am a very nice and humble front-end developer. I can design a
                website on figma, develop it using NextJS, and deploy it on
                Vercel. Well that’s what I did for this website, if you want to
                know more, keep scrolling.
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <img src="/assets/images/jaagrav.png" className="w-full mx-auto" />
          </div>
        </div>
      </div>
      <GallerySection />
      <SubHeader
        title="Why hire me?"
        caption="Here's a list of all my skills and all the reasons why you should hire me. As a developer, I don't completely know anything, you see I am not very good at memorizing, I normally read documentations everytime I am building something, but I make sure to get the work done in time."
      />
      <SkillsSection />
      <SubHeader
        title="My Experience"
        caption="I am a goddamn professional. So long I have done some internships, have worked for some clients, and have also contributed to OpenSource bootcamps, communities and programs that you can read more about below."
      />
      <ExperienceSection />
    </div>
  );
}