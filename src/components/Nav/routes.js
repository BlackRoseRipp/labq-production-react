import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./Nav.css";

const Home = React.lazy(() => import("../../pages/Home/Home"))
const Services = React.lazy(() => import("../../pages/Services/Services"))
const AboutUs = React.lazy(() => import("../../pages/About/AboutUs"))
const Licensing = React.lazy(() => import("../../pages/About/Licensing"))
const News = React.lazy(() => import("../../pages/News/News"))
const Careers = React.lazy(() => import("../../pages/Careers/Careers"))
const Contact = React.lazy(() => import("../../pages/Contact/Contact"))
const Forms = React.lazy(() => import("../../pages/Doctor/Forms"))
const Supplies = React.lazy(() => import("../../pages/Doctor/Supplies"))
const Accessibility = React.lazy(() => import("../../pages/Misc/Accessibility"))
const Policy = React.lazy(() => import("../../pages/Misc/Policy"))
const Terms = React.lazy(() => import("../../pages/Misc/Terms"))
const Appointment = React.lazy(() => import("../../pages/Patient/Appointment"))
const Billing = React.lazy(() => import("../../pages/Patient/Billing"))
const CovidMobileTesting = React.lazy(() => import("../../pages/Patient/CovidMobileTesting"))
const Insurance = React.lazy(() => import("../../pages/Patient/Insurance"))
const LabLocations = React.lazy(() => import("../../pages/Patient/LabLocations"))
const Tests = React.lazy(() => import("../../pages/Patient/Tests"))

export const routes = () => {
  const pages = [
      { path: "/", component: <Home /> },
      { path: "/services", component: <Services /> },
      { path: '/about', component: <AboutUs /> },
      { path: '/about/accreditation-licensing', component: <Licensing /> },
      { path: '/news', component: <News /> },
      { path: '/careers', component: <Careers /> },
      { path: '/contact-us', component: <Contact /> },
      { path: '/forms', component: <Forms /> },
      { path: '/supplies', component: <Supplies /> },
      { path: '/accessibility-statement', component: <Accessibility /> },
      { path: '/privacy-policy', component: <Policy /> },
      { path: '/terms-and-conditions', component: <Terms /> },
      { path: '/appointment', component: <Appointment /> },
      { path: '/billing', component: <Billing /> },
      { path: '/covid-mobile-testing', component: <CovidMobileTesting /> },
      { path: '/insurance', component: <Insurance /> },
      { path: '/location', component: <LabLocations /> },
      { path: '/tests', component: <Tests /> }
  ];

  return (
    <Suspense
      fallback={
        <h3 style={{ textAlign: "center", padding: "50px" }}>Loading...</h3>
      }
    >
      <Routes>
        {pages.map((page) => {
          return <Route path={page.path} exact element={page.component} />;
        })}
      </Routes>
    </Suspense>
  );
};
