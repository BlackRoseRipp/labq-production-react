import React, { Fragment } from "react";
import Footer from "./Footer/Footer";
import NavBar from "./Nav/NavBar";


const SiteWrapper = (props) => {
  return (
      <Fragment>
          <NavBar />
          <Footer />
      </Fragment>
  );
};

export default SiteWrapper;
