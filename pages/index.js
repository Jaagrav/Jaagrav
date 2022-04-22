import { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import {
  HomeHeroSection,
  GallerySection,
  SubHeader,
  ProjectCards,
  ExperienceSection,
  SkillsSection,
  TestimonialsSection,
} from "../components";
import projectData from "../project-data";

export default function Home() {
  useEffect(() => {
    console.log("Page Loaded");
  }, []);

  return (
    <div className="h-fit w-full overflow-clip">
      <Head>
        <title>Home / Jaagrav</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="title" content="Home / Jaagrav" />
        <meta
          name="description"
          content="I am a very nice and humble front-end developer. I can design a
          website on figma, develop it using NextJS, and deploy it on
          Vercel. Well that’s what I did for this website, if you want to
          know more, keep scrolling."
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home / Jaagrav" />
        <meta
          property="og:description"
          content="I am a very nice and humble front-end developer. I can design a
          website on figma, develop it using NextJS, and deploy it on
          Vercel. Well that’s what I did for this website, if you want to
          know more, keep scrolling."
        />
        <meta
          property="og:image"
          content="https://jaagrav-2.vercel.app/assets/images/seo/home.webp"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Home / Jaagrav" />
        <meta
          property="twitter:description"
          content="I am a very nice and humble front-end developer. I can design a
          website on figma, develop it using NextJS, and deploy it on
          Vercel. Well that’s what I did for this website, if you want to
          know more, keep scrolling."
        />
        <meta
          property="twitter:image"
          content="https://jaagrav-2.vercel.app/assets/images/seo/home.webp"
        />

        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
      </Head>
      <HomeHeroSection />
      <GallerySection />
      <SubHeader
        title="Featured Projects"
        caption="Take a look at the shit I made in the name of Software Development. Honestly I am quite proud how most of them turned out. Most of them are available on Github so go ahead knock yourself out! The others are client/freelance projects."
      />
      {projectData.map((props, index) => {
        if (props.showOnHome)
          return <ProjectCards key={`project-card-${index}`} {...props} />;
      })}
      <span className="relative z-10 block text-center mx-auto my-16 text-lightTextColor dark:text-white text-xl skew">
        Wait that’s it?{" "}
        <Link href="/projects">
          <a className="transition text-pink hover:underline underline-offset-8">
            Show me more!
          </a>
        </Link>
      </span>
      <SubHeader
        title="My Experience"
        caption="I am a goddamn professional. So long I have done some internships, have worked for some clients, and have also contributed to OpenSource bootcamps, communities and programs that you can read more about below."
      />
      <ExperienceSection />
      <span className="relative z-10 block text-center mx-auto my-16 text-lightTextColor dark:text-white text-xl skew">
        {"There's more, "}
        <Link href="https://linkedin.com/in/jaagrav" target="_blank">
          <a className="transition text-indigo hover:underline underline-offset-8">
            click here to find out!
          </a>
        </Link>
      </span>
      <SubHeader
        title="Why hire me?"
        caption="Here's a list of all my skills and all the reasons why you should hire me. As a developer, I don't completely know anything, you see I am not very good at memorizing, I normally read documentations everytime I am building something, but I make sure to get the work done in time."
      />
      <SkillsSection />
      <span className="relative z-10 block text-center mx-auto mt-16 text-lightTextColor dark:text-white text-xl skew">
        {"Dude c'mon if you haven't checked me out on "}
        <Link href="https://linkedin.com/in/jaagrav" target="_blank">
          <a className="transition text-indigo hover:underline underline-offset-8">
            LinkedIn
          </a>
        </Link>
        , do it!
      </span>
      <span className="relative z-10 block text-center mx-auto mt-2 mb-16 text-lightTextColor dark:text-white text-xl skew">
        {"Also here's my "}
        <Link href="https://github.com/Jaagrav" target="_blank">
          <a className="transition text-pink hover:underline underline-offset-8">
            GitHub!!!
          </a>
        </Link>{" "}
      </span>
      <SubHeader
        title="People love me, seriously."
        caption="The word testimonial comes from the latin word testimonium which means a formal statement testifying to someone's character and qualifications. Basically this section highlights some of the beautiful things, people I admire and respect, say about me."
      />
      <TestimonialsSection />
      <span className="relative z-10 block text-center mx-auto mt-2 mb-16 text-lightTextColor dark:text-white text-xl skew">
        {"All of these are totally real, "}
        <Link
          href="https://www.linkedin.com/in/jaagrav/details/recommendations/"
          target="_blank"
        >
          <a className="transition text-pink hover:underline underline-offset-8">
            look here for proof.
          </a>
        </Link>{" "}
      </span>
    </div>
  );
}
