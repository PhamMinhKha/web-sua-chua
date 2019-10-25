import React, { useState } from "react";
import Header from "./../components/layouts/modules/header";
import Footer from "./../components/layouts/modules/footer";
import Menu from "./../components/layouts/modules/menu";
import Parallax from "./../components/layouts/modules/parallax";
import Chucnang from "./../components/layouts/modules/chucnang";
// import { Button, Box } from "@material-ui/core";
const Home = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Parallax/>
      <Chucnang/>
      <Footer />
    </div>
  );
};

export default Home;
