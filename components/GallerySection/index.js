export default function GallerySection() {
  return (
    <div className="relative z-10 px-10 md:px-32 mx-auto skew">
      <div className="w-full grid -md:grid-rows-2 md:grid-cols-2 gap-4 md:gap-6 max-w-screen-xl mx-auto">
        <div className="w-full grid grid-rows-2 gap-4 md:gap-6">
          <div className="grid grid-cols-[1fr_0.5fr] gap-4 md:gap-6">
            <div
              className="rounded-lg duration-300 bg-black dark:bg-white h-36 md:h-48 w-full bg-120% hover:bg-100% bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(./assets/images/gallery-section-1.webp)`,
              }}
            ></div>
            <div
              className="rounded-lg duration-300 bg-black dark:bg-white h-36 md:h-48 w-full bg-120% hover:bg-100% bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(./assets/images/gallery-section-2.webp)`,
              }}
            ></div>
          </div>
          <div className="grid grid-cols-[0.5fr_1fr] gap-4 md:gap-6">
            <div
              className="rounded-lg duration-300 bg-black dark:bg-white h-36 md:h-48 w-full bg-120% hover:bg-100% bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(./assets/images/gallery-section-3.webp)`,
              }}
            ></div>
            <div
              className="rounded-lg duration-300 bg-black dark:bg-white h-36 md:h-48 w-full bg-120% hover:bg-100% bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(./assets/images/gallery-section-4.webp)`,
              }}
            ></div>
          </div>
        </div>
        <div className="w-full grid grid-rows-2 gap-4 md:gap-6">
          <div className="grid grid-cols-[1fr_0.5fr] gap-4 md:gap-6">
            <div
              className="rounded-lg duration-300 bg-black dark:bg-white h-36 md:h-48 w-full bg-120% hover:bg-100% bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(./assets/images/gallery-section-5.webp)`,
              }}
            ></div>
            <div
              className="rounded-lg duration-300 bg-black dark:bg-white h-36 md:h-48 w-full bg-120% hover:bg-100% bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(./assets/images/gallery-section-6.webp)`,
              }}
            ></div>
          </div>
          <div className="grid grid-cols-[0.5fr_1fr] gap-4 md:gap-6">
            <div
              className="rounded-lg duration-300 bg-black dark:bg-white h-36 md:h-48 w-full bg-120% hover:bg-100% bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(./assets/images/gallery-section-7.webp)`,
              }}
            ></div>
            <div
              className="rounded-lg duration-300 bg-black dark:bg-white h-36 md:h-48 w-full bg-120% hover:bg-100% bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(./assets/images/gallery-section-8.webp)`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
