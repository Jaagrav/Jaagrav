import Link from "next/link";

import {
  GallerySection,
  SubHeader,
  SkillsSection,
  TestimonialsSection,
  ExperienceSection,
  Animatify,
  Analytics,
} from "../../components";
import Head from "next/head";

export default function About() {
  return (
    <div className="h-fit w-full pt-4">
      <Head>
        <title>About / Jaagrav</title>
        <meta name="title" content="About / Jaagrav" />
        <meta
          name="description"
          content="A Full Stack Developer based in West Bengal, India. I enjoy
          designing and developing websites, I am currently 18 years old,
          and am also in the first year of my college. I am currently
          pursuing B. Tech in Computer Science and Engineering from
          University."
        />
        <meta
          name="viewport"
          content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About / Jaagrav" />
        <meta
          property="og:description"
          content="A Full Stack Developer based in West Bengal, India. I enjoy
          designing and developing websites, I am currently 18 years old,
          and am also in the first year of my college. I am currently
          pursuing B. Tech in Computer Science and Engineering from
          University."
        />
        <meta
          property="og:image"
          content="https://jaagrav-2.vercel.app/assets/images/seo/about.webp"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="About / Jaagrav" />
        <meta
          property="twitter:description"
          content="A Full Stack Developer based in West Bengal, India. I enjoy
          designing and developing websites, I am currently 18 years old,
          and am also in the first year of my college. I am currently
          pursuing B. Tech in Computer Science and Engineering from
          University."
        />
        <meta
          property="twitter:image"
          content="https://jaagrav-2.vercel.app/assets/images/seo/about.webp"
        />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
      </Head>
      <Animatify>
        <div className="px-10 md:px-32 pb-12">
          <div className="md:grid md:grid-cols-[1fr_0.4fr] gap-8 max-w-screen-xl m-auto mt-4">
            {/* <div className="block md:hidden">
              <div
                className="relative z-10 bg-contain bg-black bg-no-repeat bg-center w-full h-[50vw]"
                style={{ backgroundImage: "url(/assets/images/jaagrav.webp)" }}
              ></div>
            </div> */}
            <div className="md:m-auto">
              <h1 className="absolute text-border text-[6rem] md:text-[7rem] whitespace-nowrap opacity-10 -translate-y-1/2">
                Jaagrav Seal
              </h1>
              <img
                className="absolute m-auto top-0 left-0 -translate-y-1/2 -translate-x-1/4 max-w-none w-[50rem] md:w-[75rem] dark:opacity-60"
                src="/assets/images/blur-ball-blue.webp"
              />
              <div className="relative z-10">
                <h1 className="m-auto bottom-0 text-lightTextColor dark:text-white text-5xl">
                  Jaagrav Seal
                </h1>
                <span className="block text-lightTextColor dark:text-white mt-8 text-xl leading-10">
                  A Full Stack Developer based in West Bengal, India. I enjoy
                  designing and developing websites, I am currently{" "}
                  {new Date().getFullYear() - 2004} years old, and am also in
                  the first year of my college. I am currently pursuing B. Tech
                  in Computer Science and Engineering from KIIT University.
                </span>
                <Link href="/resume">
                  <a
                    className={`inline-block mt-8 w-full md:w-fit text-center md:text-left md:mr-4 px-8 py-2 text-xl border-lightTextColor dark:border-white border-2 bg-lightTextColor dark:bg-white text-white dark:text-bgColor rounded-xl transition shadow-none hover:shadow-xl hover:scale-105`}
                  >
                    Check out Resume
                  </a>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="/assets/images/jaagrav.webp"
                className="w-full mx-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
        <GallerySection />
        <SubHeader title="Why hire me?" />
        <SkillsSection />
        <SubHeader
          title="My Experience"
          caption="I am a goddamn professional. So long I have done some internships, have worked for some clients, and have also contributed to OpenSource bootcamps, communities and programs that you can read more about below."
        />
        <ExperienceSection />
        <SubHeader
          title="People love me, seriously."
          caption="The word testimonial comes from the latin word testimonium which means a formal statement testifying to someone's character and qualifications. Basically this section highlights some of the beautiful things, people I admire and respect, say about me."
        />
        <TestimonialsSection />
        <span className="relative z-10 block text-center mx-auto mt-2 mb-16 text-lightTextColor dark:text-white text-xl skew">
          {"All of these are totally real, "}
          <Link href="https://www.linkedin.com/in/jaagrav/details/recommendations/">
            <a
              target="_blank"
              className="transition text-pink hover:underline underline-offset-8"
            >
              look here for proof.
            </a>
          </Link>{" "}
        </span>
      </Animatify>
    </div>
  );
}
