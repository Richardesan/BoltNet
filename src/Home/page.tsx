import Footer from "../component/footer";
import Navbar from "../component/navbar";
import { Outlet, useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  const noFooterPaths = ["/aboutUs"]; 

  const shouldShowFooter = !noFooterPaths.includes(location.pathname);

  return (
    <div
      className="bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: "url('/Homepage.jpg')" }}
    >
      <Navbar />
      <div>
        <Outlet />
        {shouldShowFooter && <Footer />}
      </div>
    </div>
  );
};

export default Home;
