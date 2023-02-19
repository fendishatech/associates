import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex">
      <SideNav />
      <div className={`flex-1 h-screen`}>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
