const Team = () => {
  return (
    <div className="py-20">
      <div className="relative rounded-2xl h-100 p-24 flex flex-col justify-center bg-gray-500 overflow-hidden max-lg:p-16 max-md:p-10">
        {/* Background image */}
        <img
          src="/banner.png"
          alt="Services background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Text content */}
        <div className="relative z-10 text-white flex flex-col justify-center">
          <article className="flex justify-between items-center max-xl:flex-col max-xl:gap-10  max-xl:text-center max-sm:text-left">
            {/* LEFT TEXT */}
            <div className="my-8 max-w-xl w-full max-xl:max-w-2xl">
              <h1 className="text-6xl font-semibold leading-none max-xl:text-5xl max-md:text-3xl">
                Ready to Engineer Your Market Advantage?
              </h1>
            </div>

            {/* RIGHT TEXT + BUTTON */}
            <div className="text-2xl max-w-md max-xl:max-w-xl max-md:text-lg max-xl:mx-auto max-sm:mx-0 max-sm:mb-8">
              <p className="leading-normal max-md:leading-relaxed">
                Let's discuss how our UK-managed, globally-focused team can
                build your next scalable, localized platform.
              </p>

              <p className="mt-8 text-base text-black bg-white w-fit font-semibold py-3 px-12 rounded-full cursor-pointer transition-all duration-300 active:scale-90  max-xl:mx-auto max-md:px-8 max-md:text-sm">
                Get Started Today
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Team;
