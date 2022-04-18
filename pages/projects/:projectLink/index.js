import { useEffect, useState } from "react";
import { SubHeader, ProjectCards } from "../../../components";
import projectData from "../../../project-data";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

export default function Project() {
  const router = useRouter(),
    { projectLink } = router.query,
    [project, setProject] = useState({}),
    [randomProject, setRandomProject] = useState({}),
    [projectIndex, setProjectIndex] = useState({});

  useEffect(() => {
    let index = 0,
      project = projectData.find((project, i) => {
        index++;
        return project.link === projectLink;
      });
    setProject(project);
    setProjectIndex(index);
  }, [projectLink]);

  useEffect(() => {
    if (projectIndex < projectData.length) {
      setRandomProject(projectData[projectIndex]);
    } else {
      setRandomProject(projectData[0]);
    }
  }, [projectIndex]);

  return (
    <div className="h-fit w-full overflow-hidden">
      <Head>
        <title>{project?.title} / Projects / Jaagrav</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="og:image" content={project?.img} />
        <meta
          name="og:title"
          content={`${project?.title} / Projects / Jaagrav`}
        />
        <meta name="description" content={project?.miniDesc} />
      </Head>
      <SubHeader
        title={project?.title}
        // caption={project?.miniDesc}
      />
      <div className="px-10 md:px-24">
        <div className="relative z-10 max-w-screen-xl mx-auto">
          <img src={project?.img} className="w-full" />
          <div className="grid md:grid-cols-[1fr_2px_0.6fr] mt-12">
            <div className="py-12 md:pr-12">
              <div className="text-xl leading-10 text-white">
                {project?.desc}
              </div>
            </div>
            <div className="h-full w-full bg-bgSecondaryColor"></div>
            <div className="py-12 md:pl-12">
              <div className="text-white text-2xl">Technologies used:</div>
              <div className="my-6">
                {project?.tech?.map((tech, index) => (
                  <span
                    key={`tech-index-${index}`}
                    className="inline-block bg-bgSecondaryColor text-white text-lg md:text-sm px-2 py-1 mb-2 mr-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="text-white text-2xl">Check it out:</div>
              <div className="flex mt-6 gap-6">
                {project?.website && (
                  <Link href={project.website} target="_blank">
                    <a
                      className={`block h-full w-full text-center px-8 py-2 text-bgColor text-xl border-white border-2 bg-white`}
                    >
                      Website
                    </a>
                  </Link>
                )}
                {project?.github && (
                  <Link href={project.github} target="_blank">
                    <a
                      className={`block h-full w-full text-center px-8 py-2 text-white text-xl border-white border-2`}
                    >
                      GitHub
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <SubHeader
        title="Next Project"
        caption="This is not the only shit I made, check out this other project that this page randomly chose for you to see, hope you'll like it. And if you don't go back to the projects page to see all the projects I have built so far."
      />
      <ProjectCards {...randomProject} />
      <span className="relative z-10 block text-center mx-auto mt-16 text-white text-xl skew">
        {"There's more, "}
        <Link href="https://github.com/jaagrav" target="_blank">
          <a className="transition text-indigo hover:underline underline-offset-8">
            click here to find out!
          </a>
        </Link>
      </span>
    </div>
  );
}
