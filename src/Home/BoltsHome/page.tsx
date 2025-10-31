import Hero from "./component/Hero";
import AboutBoltNet from "./component/aboutBoltNet";

import FlagShipProject from "./component/flagShipProject";
import FocusAreas from "./component/focusAreas";
import Team from "./component/team";

const BoltsHome = () => {
  return (
    <div>
      <div className="px-24  max-xl:px-10 max-md:px-5 ">
        <Hero />
        <AboutBoltNet />
      </div>
      <FocusAreas />
      <div className="px-24 max-xl:px-10 max-md:px-5">
        <FlagShipProject />
        <Team />
      </div>
    </div>
  );
};

export default BoltsHome;
