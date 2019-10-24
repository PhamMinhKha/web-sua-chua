import React, { useState } from "react";
import Header from "./../components/layouts/modules/header";
import Footer from "./../components/layouts/modules/footer";
import Menu from "./../components/layouts/modules/menu";
import Parallax from "./../components/layouts/modules/parallax";
import { Button, Box } from "@material-ui/core";
const Home = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Parallax/>
      <Footer />
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <Box component="span" m={1} color="text.warning" clone>
        <Button />
      </Box>
    </div>
  );
};

export default Home;
