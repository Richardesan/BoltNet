import { PiInstagramLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AppRoutes } from "../utils/route";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  const socialArray = [
    {
      img: <PiInstagramLogoFill />,
      link: "https://www.instagram.com/boltnextechnology/",
    },
    {
      img: <FaXTwitter />,
      link: "https://x.com/boltnex1877",
    },
    {
      img: <IoMdMail />,
      link: "mailto:info@boltnex.com",
    },
  ];

  const linkStyle =
    "hover:text-bolts-blue transition-all duration-200 cursor-pointer hover:font-semibold hover:underline";

  return (
    <section className="pt-20 px-24 max-xl:px-16 max-lg:px-10 max-md:px-6">
      <div
        className="
          grid 
          grid-cols-3 
          gap-10 
          max-md:lg:gap-4
          items-start 
          place-items-start 
          max-lg:grid-cols-2 
          max-md:grid-cols-1 
         
          max-md:place-items-start
        "
      >
        {/* LEFT SECTION */}
        <div className="flex flex-col gap-y-3 items-start ">
          <img src="/logo.svg" alt="logo" className="mb-1 w-36" />
          <p className="text-black/70 text-sm md:text-base">
            info@boltnex.com
          </p>
          <p className="text-black/70 text-sm md:text-base">
            Leeds, United Kingdom.
          </p>

          <div className="flex gap-x-6 items-center mt-4">
            {socialArray.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-3xl text-black active:scale-95 hover:text-bolts-blue transition-all duration-200 hover:scale-110">
                  {item.img}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* COMPANY LINKS */}
        <div className="text-black/50 max-sm:hidden">
          <p className="text-black font-semibold mb-2">Company</p>
          <div className="space-y-1">
            <p className={linkStyle}>
              <Link to={AppRoutes.home}>Home</Link>
            </p>
            <p className={linkStyle}>
              <Link to={AppRoutes.aboutUs}>About Us</Link>
            </p>
            <p className={linkStyle}>
              <Link to={AppRoutes.careers}>Careers</Link>
            </p>
            <p className={linkStyle}>
              <Link to={AppRoutes.contactUs}>Contact Us</Link>
            </p>
          </div>
        </div>

        {/* SERVICES LINKS */}
        <div className="text-black/50 max-sm:hidden">
          <p className="text-black font-semibold mb-2">Services</p>
          <div className="space-y-1">
            <p>Custom Platform Engineering</p>
            <p>AI/ML and Data Solutions</p>
            <p>Market Localization & Integration</p>
            <p>Technology Consulting & Audits</p>
            <p>Market Localization & Integration</p>
          </div>
        </div>
      </div>

      {/* COPYRIGHT LINE */}
      <p className="text-center py-7 border-t border-gray-300 mt-7 text-sm text-black/70 max-sm:text-xs">
        <span className="mr-2">© 2025</span> BOLTNEX TECHNOLOGY — All rights
        reserved.
      </p>
    </section>
  );
};

export default Footer;
