import React from "react";
import Footer from "./footer";
import Header from "./header";
import HoroImage from "./hero";
import img from "../../public/img/llibrary.png";
const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Header></Header>
      </div>
      <HoroImage img={img}></HoroImage>
      {children}َ<Footer></Footer>
    </>
  );
};

export default Layout;
