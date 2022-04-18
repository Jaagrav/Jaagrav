import Link from "next/link";
import {
  FiGithub,
  FiTwitter,
  FiYoutube,
  FiGitlab,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

export default function Footer() {
  return (
    <div className="mt-12 px-10 md:px-24 relative overflow-hidden w-full border-t-[1px] border-bgSecondaryColor">
      <h1 className="h-fit w-fit max-w-full absolute m-auto top-0 left-0 right-0 bottom-0 text-center text-border text-[24vw] md:text-[14vw] opacity-10 md:opacity-5">
        Jaagrav Seal
      </h1>
      <img
        className="w-[75vw] absolute z-0 right-0 bottom-0 m-auto -translate-x-0 translate-y-2/3"
        src="/assets/images/blur-ball-blue.png"
      />
      <img
        className="w-[75vw] absolute z-0 left-0 bottom-0 m-auto translate-x-0 translate-y-2/3 opacity-60"
        src="/assets/images/blur-ball-indigo.png"
      />
      <div className="relative max-w-screen-xl w-full mx-auto mt-10 mb-6">
        <div className="">
          <div className="">
            <p className="text-white text-base leading-10">
              Monster Monster under my bed, come out and play cause I
            </p>
            <h1 className="text-white text-5xl mt-2">Need a friend!</h1>
            <p className="text-white text-xl leading-10 mt-4">
              Ever wanna touch me, hire me or just hang out with me? Feel free
              to contact me any time, it can be by filling a form, emailing me,
              direct messaging on social media or... Yeah that's it, don't ever
              call me, I hate smart phones.
            </p>
            <div className="flex justify-start items-center gap-6 h-fit mt-6">
              <Link href="/contact">
                <a
                  className={`inline-block w-full md:w-fit text-center md:text-left px-8 py-2 text-white text-xl border-white border-2`}
                >
                  Contact
                </a>
              </Link>
              <a
                className="text-white text-3xl w-fit inline "
                href="https://github.com/Jaagrav"
                target="_blank"
              >
                <FiGithub />
              </a>
              <a
                className="text-white text-3xl w-fit inline "
                href="https://linkedin.com/in/jaagrav"
                target="_blank"
              >
                <FiLinkedin />
              </a>
              <a
                className="text-white text-3xl w-fit inline "
                href="https://www.youtube.com/c/TheCoders"
                target="_blank"
              >
                <FiYoutube />
              </a>
              <a
                className="text-white text-3xl w-fit inline "
                href="https://gitlab.com/Jaagrav"
                target="_blank"
              >
                <FiGitlab />
              </a>
              <a
                className="text-white text-3xl w-fit inline "
                href="https://twitter.com/xJaagrav"
                target="_blank"
              >
                <FiTwitter />
              </a>
              <a
                className="text-white text-3xl w-fit inline "
                href="mailto:jaagravseal03@gmail.com"
                target="_blank"
              >
                <FiMail />
              </a>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-bgSecondaryColor mt-12 mb-6"></div>
        <div className="text-white text-lg text-center">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://peerlist.io/jaagrav"
            target="_blank"
            className="transition text-pink hover:underline underline-offset-8 text-lg"
          >
            Jaagrav Seal
          </a>
          . All this shit is mine.
        </div>
      </div>
    </div>
  );
}
