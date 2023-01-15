import {SubHeader, ProjectCards, Animatify, SEO, BlogSection} from "../../components";
import projectData from "../../project-data";
import Head from "next/head";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="h-fit w-full">
      <SEO
        title="Projects / Jaagrav"
        desc="Take a look at these projects I made in the name of Software Development. Honestly I am quite proud how most of them turned out. Most of them are available on Github so go ahead knock yourself out! The others are client/freelance projects."
        img="https://jaagrav-2.vercel.app/assets/images/seo/projects.webp"
      />
      <SubHeader
        title="My Projects"
        caption="Take a look at these projects I made in the name of Software Development. Honestly I am quite proud how most of them turned out. Most of them are available on Github so go ahead knock yourself out! The others are client/freelance projects."
      />
      <div className="grid grid-cols-1 gap-24">
        <Animatify>
          {projectData.map((props, index) => (
            <ProjectCards key={`project-card-${index}`} {...props} />
          ))}
        </Animatify>
      </div>
      <Animatify>
        <span className="relative z-10 block text-center mx-auto mt-16 text-lightTextColor dark:text-white text-xl skew">
          {"There's more, "}
          <Link href="https://github.com/jaagrav">
            <a
              className="transition text-indigo hover:underline underline-offset-8"
              target="_blank"
            >
              click here to find out!
            </a>
          </Link>
        </span>
      </Animatify>
        <BlogSection />

    </div>
  );
}
