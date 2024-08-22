import React from "react";
import Layout from "./components/layout";
import Uni from "./components/uni";
import OurServices from "./components/ourServices";
import Carousel from "./components/carousel";
import SuccessCases from "./components/successCases";

const App = () => {
  return (
    <div className="">
      <Layout>
          <Uni></Uni>
          <OurServices></OurServices>
          <SuccessCases></SuccessCases>
          <Carousel></Carousel>
      </Layout>
    </div>
  );
};

export default App;
