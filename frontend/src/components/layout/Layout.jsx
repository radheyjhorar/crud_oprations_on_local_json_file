import "./Layout.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {

  const viewHight = window.innerHeight;

  return (
    <div className="main-container">
      <header>
        <Header />
      </header>
      <div className="content-container">
        <Outlet />
      </div>
      <footer style={viewHight > 100 && {position: "relative"}}>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
