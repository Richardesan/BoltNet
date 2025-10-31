import Gallery from "./component/gallery";
import BuisnessModel from "./component/buisnessModel";
import Join from "./component/join";

const Careers = () => {
  return (
    <div className="px-24 max-xl:px-10 max-md:px-5 pt-28">
      {/* Title */}
      <h1 className="text-5xl max-lg:text-4xl max-md:text-3xl font-semibold text-center">
        Careers
      </h1>

      {/* Intro Text + Button */}
      <div className="max-w-4xl mt-5 leading-loose text-lg max-md:text-base mx-auto text-center w-full">
        <p>
          BoltNex Technologies is a forward-thinking tech company dedicated to
          empowering talent and shaping the future of digital innovation. We’re
          committed to building an environment where creativity, collaboration,
          and growth thrive. At BoltNex, we believe our people are the
          foundation of every successful solution we create. We provide
          opportunities for professionals to learn, lead, and make real impact
          through technology. Join our team and be part of a company that’s
          driving global digital transformation through innovation, excellence,
          and a shared vision to empower businesses and individuals worldwide.
        </p>

        <div className="px-10 py-2 my-8 text-sm sm:text-base hover:bg-transparent hover:border-bolts-blue hover:text-bolts-blue transition-all duration-300 border hover-scale:105 active:scale-95 cursor-pointer rounded-full w-fit mx-auto bg-bolts-blue text-white">
          JOIN US
        </div>
      </div>

      {/* Sections */}
      <Gallery />
      <BuisnessModel />

      {/* Image Grid */}
      <div className="py-20">
        <div className="h-130 max-lg:h-auto grid gap-x-3 grid-cols-2 max-lg:grid-cols-1 overflow-hidden">
          {/* Left large image */}
          <div className="h-130 max-lg:h-65 object-center object-cover shadow shadow-black/30 w-full overflow-hidden rounded-md">
            <img
              src="/car6.jpg"
              alt="img"
              className="object-center w-full h-full object-cover"
            />
          </div>

          {/* Right column stacked images */}
          <article className="flex flex-col gap-y-3 overflow-hidden mt-0 max-lg:mt-5">
            <div className="basis-65 shadow shadow-black/30 object-cover object-center overflow-hidden rounded-md">
              <img
                src="/car7.jpg"
                alt="img"
                className="object-center w-full h-full object-cover"
              />
            </div>
            <div className="basis-65 shadow shadow-black/30 object-cover object-center overflow-hidden rounded-md">
              <img
                src="/car8.jpg"
                alt="img"
                className="object-center w-full h-full object-cover"
              />
            </div>
          </article>
        </div>
      </div>

      <Join />
    </div>
  );
};

export default Careers;
