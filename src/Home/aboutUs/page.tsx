import FirstPart from "./component/first";
import JoinUs from "./component/joinUs";
import SecondPart from "./component/second";
import Services from "./component/services";

const AboutUs = () => {
  return (
    <div
  className="
    h-screen
    overflow-y-scroll
    scroll-smooth
    snap-y snap-mandatory
    max-lg:snap-none
    overflow-x-hidden
  "
>
  <div className="px-24 max-xl:px-10 max-sm:pt-16 max-md:px-5 snap-start">
    <FirstPart />
  </div>

  <div className="px-24 max-xl:px-10 max-md:px-5 snap-start">
    <SecondPart />
  </div>

  <div className="snap-start">
    <Services />
  </div>

  <div className="px-24 max-xl:px-10 max-md:px-5 snap-start">
    <JoinUs />
  </div>
</div>

  );
};

export default AboutUs;
