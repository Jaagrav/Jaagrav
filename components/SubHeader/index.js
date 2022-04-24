export default function SubHeader({ title, caption }) {
  return (
    <div className="z-10 relative px-10 md:px-32 mx-auto skew">
      <div className="max-w-screen-xl mx-auto -translate-y-1/4">
        <h1 className="text-border text-[6rem] md:text-[7rem] whitespace-nowrap opacity-10 translate-y-1/2">
          {title}
        </h1>
        <img
          className="absolute m-auto top-0 bottom-0 left-0 -translate-x-1/2 max-w-none w-[50rem] md:w-[75rem] dark:opacity-60"
          src="/assets/images/blur-ball-blue.webp"
        />
        <div className="relative z-10">
          <h1 className="m-auto bottom-0 text-lightTextColor dark:text-white text-5xl">
            {title}
          </h1>
          <span className="block text-lightTextColor dark:text-white mt-8 text-xl leading-10">
            {caption}
          </span>
        </div>
      </div>
    </div>
  );
}
