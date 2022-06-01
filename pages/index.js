import Link from "next/link";
import Head from "next/head";
import {
  Animatify,
  HomeHeroSection,
  GallerySection,
  SubHeader,
  ProjectCards,
  ExperienceSection,
  SkillsSection,
  TestimonialsSection,
  Analytics,
} from "../components";
import projectData from "../project-data";

export default function Home() {
  return (
    <div className="h-fit w-full ">
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
      <Animatify>
        <GallerySection />
        <SubHeader
          title="Featured Projects"
          caption="Take a look at these projects I made in the name of Software Development. Honestly I am quite proud how most of them turned out. Most of them are available on Github so go ahead knock yourself out! The others are client/freelance projects."
        />
        <div className="grid grid-cols-1 gap-24">
          {projectData.map((props, index) => {
            if (props.showOnHome)
              return <ProjectCards key={`project-card-${index}`} {...props} />;
          })}
        </div>
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
          <Link href="https://linkedin.com/in/jaagrav">
            <a
              target="_blank"
              className="transition text-indigo hover:underline underline-offset-8"
            >
              click here to find out!
            </a>
          </Link>
        </span>
        <SubHeader title="Why hire me?" />
        <SkillsSection />
        <span className="relative z-10 block text-center mx-auto my-16 text-lightTextColor dark:text-white text-xl px-10 md:px-32">
          {"Dude c'mon if you haven't checked me out on "}
          <Link href="https://linkedin.com/in/jaagrav">
            <a
              className="transition text-indigo hover:underline underline-offset-8"
              target="_blank"
            >
              LinkedIn
            </a>
          </Link>
          , do it!
          {" Also here's my "}
          <Link href="https://github.com/Jaagrav">
            <a
              className="transition text-pink hover:underline underline-offset-8"
              target="_blank"
            >
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
          <Link href="https://www.linkedin.com/in/jaagrav/details/recommendations/">
            <a
              target="_blank"
              className="transition text-pink hover:underline underline-offset-8"
            >
              look here for proof.
            </a>
          </Link>{" "}
        </span>
        {/* <FeaturedArticle
          title="Drive a Tesla Cybertruck or literally any car on your browser with Threejs"
          tags={["javascript", "webdev", "threejs"]}
          desc="In this article, we would be building this, a 3D Tesla Cybertruck that can be driven with your arrow keys and WASD keys on your browser. We would be building this project with the help of RV-Engine..."
          dev="https://dev.to/jaagrav/drive-a-tesla-cybertruck-or-literally-any-car-on-your-browser-with-threejs-4ila"
          project="/projects/raycast-vehicle-engine"
          img="/assets/images/projects/Rv-Engine.webp"
        /> */}
      </Animatify>
    </div>
  );
}
