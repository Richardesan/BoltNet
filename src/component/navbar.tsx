import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AppRoutes } from "../utils/route";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pendingNav, setPendingNav] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (paths: string[]): boolean => {
    return paths.some((path) => {
      if (path.includes(":")) {
        const basePath = path.split("/:")[0];
        return location.pathname.startsWith(basePath);
      }
      return location.pathname === path;
    });
  };

  const LoggedInNavItems = [
    {
      label: "Home",
      paths: [AppRoutes.home],
      to: AppRoutes.home,
    },
    { label: "About us", paths: [AppRoutes.aboutUs], to: AppRoutes.aboutUs },
    { label: "Careers", paths: [AppRoutes.careers], to: AppRoutes.careers },
  ];

  useEffect(() => {
    if (!sidebarOpen && pendingNav) {
      if (pendingNav.includes("#")) {
        window.location.href = pendingNav;
      } else {
        navigate(pendingNav);
      }
      setPendingNav(null);
    }
  }, [sidebarOpen, pendingNav, navigate]);

  const handleTabClick = (path: string) => {
    setPendingNav(path);
    setSidebarOpen(false);
  };

  return (
    <nav className="fixed left-0 top-0 backdrop-blur-sm px-24 max-md:px-5 max-xl:px-10 w-full flex justify-between items-center py-4 z-50">
      {/* Logo */}
      <div className="w-40">
        <img src="/logo.svg" className="w-full h-full" />
      </div>

      {/* Desktop Navigation */}
      <ul className="flex max-lg:hidden justify-center items-center capitalize gap-x-8 font-semibold">
        {LoggedInNavItems.map((item) => {
          const active = isActive(item.paths);
          return (
            <Link key={item.label} to={item.to}>
              <li className="relative cursor-pointer py-2">
                {/* Animated underline */}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-bolts-blue transition-all duration-300 ease-in-out ${
                    active ? "w-full" : "w-0"
                  }`}
                />
                {/* Label */}
                <span
                  className={`transition-colors duration-300 ${
                    active ? "text-black" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </span>
              </li>
            </Link>
          );
        })}
      </ul>

      {/* Mobile menu button */}
      <div
        className="max-lg:block hidden bg-bolts-blue z-20 rounded-full px-4 py-1.5 text-sm cursor-pointer font-bold text-white"
        onClick={() => setSidebarOpen(true)}
      >
        Menu
      </div>

      {/* Desktop Contact Button */}
      <Link to={AppRoutes.contactUs} className="max-lg:hidden">
        <div className="px-6 py-4 rounded-full text-white bg-bolts-blue">
          Contact Us
        </div>
      </Link>

      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 bottom-0 w-full px-3 py-3 text-white z-50 flex flex-col"
            >
              <div className="flex justify-between items-center mb-20 p-3">
                <section className="flex items-center font-bold">
                  <div className="">
                    <img src="/logo.svg" />
                  </div>
                </section>
                <div
        className="max-lg:block hidden bg-bolts-blue z-20 rounded-full px-4 py-1.5 text-sm cursor-pointer font-bold text-white"
                  onClick={() => setSidebarOpen(false)}
                >
                  Close
                </div>
              </div>

              {/* Background */}
              <div className="absolute left-0 top-0 w-screen h-screen -z-10  bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: "url('/Homepage.jpg')" }}></div>

              {/* Navigation Items */}
              {LoggedInNavItems.map((item) => {
                const active = isActive(item.paths);
                return (
                  <div
                    key={item.label}
                    onClick={() => handleTabClick(item.to)}
                    className={`py-3 my-2 cursor-pointer rounded-full mx-auto w-60 text-center border ${
                      active
                        ? "bg-bolts-blue text-white border-transparent"
                        : "border-bolts-blue text-bolts-blue rounded-full "
                    }`}
                  >
                    {item.label}
                  </div>
                );
              })}

              {/* Contact Us Button in Sidebar */}
              {/* Contact Us Button in Sidebar */}
{(() => {
  const active = isActive([AppRoutes.contactUs]);
  return (
    <div
      onClick={() => handleTabClick(AppRoutes.contactUs)}
      className={`py-3 my-2 cursor-pointer rounded-full mx-auto w-60 text-center border transition-all duration-300 ${
        active
          ? "bg-bolts-blue text-white border-transparent"
          : "border-bolts-blue text-bolts-blue"
      }`}
    >
      Contact Us
    </div>
  );
})()}

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;