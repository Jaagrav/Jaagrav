import { SubHeader, Analytics } from "../../components";
import Head from "next/head";

export default function Resume() {
  return (
    <div>
      <Head>
        <title>Resume / Jaagrav</title>
        <meta name="title" content="Resume / Jaagrav" />
        <meta
          name="description"
          content="Take a look at the shit I made in the name of Software Development. Honestly I am quite proud how most of them turned out. Most of them are available on Github so go ahead knock yourself out! The others are client/freelance projects."
        />
        <meta
          name="viewport"
          content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Resume / Jaagrav" />
        <meta
          property="og:description"
          content="Take a look at the shit I made in the name of Software Development. Honestly I am quite proud how most of them turned out. Most of them are available on Github so go ahead knock yourself out! The others are client/freelance projects."
        />
        <meta
          property="og:image"
          content="https://jaagrav-2.vercel.app/assets/images/seo/resume.webp"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Resume / Jaagrav" />
        <meta
          property="twitter:description"
          content="Take a look at the shit I made in the name of Software Development. Honestly I am quite proud how most of them turned out. Most of them are available on Github so go ahead knock yourself out! The others are client/freelance projects."
        />
        <meta
          property="twitter:image"
          content="https://jaagrav-2.vercel.app/assets/images/seo/resume.webp"
        />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
      </Head>
      <SubHeader
        title="My Resume"
        caption="Take a look at my resume to get a more formal description about myself. To know stuff like my education, etc. You can download my resume for future reference."
      />
      <div className="px-10 md:px-32 relative z-10">
        <div className="max-w-screen-xl mx-auto">
          <iframe
            src="/assets/resume/jaagrav-resume-2022.pdf"
            className="h-[90vh] w-full rounded-xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
