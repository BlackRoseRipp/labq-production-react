import React, { Fragment } from "react";
import NavBar from "./Nav/NavBar";
import Footer from "./Footer/Footer-Tryout";


const SiteWrapper = (props) => {
  return (
      <Fragment>
          <NavBar />
          <Footer />
      </Fragment>
  );
};

export default SiteWrapper;
