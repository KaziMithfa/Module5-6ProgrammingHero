import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Blogs from "../pages/Blogs";
import Bookmarks from "../pages/Bookmarks";
import Home from "../pages/Home";

const MainLayout = () => {
  return (
    <div>
      <div className="h-16">
        <Nav></Nav>
      </div>

      {/* Packet */}

      <Outlet>
        <Home></Home>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </Outlet>
    </div>
  );
};

export default MainLayout;
