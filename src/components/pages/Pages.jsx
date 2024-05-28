import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Pricing from "../pricing/Pricing";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import Gallary from "../gallary/Gallary";
import WhatWeDo from "../recruitment/WhatWeDo";
import HowRecruit from "../recruitment/HowRecruit";
import BlogDetails from "../blog/BlogDetails";
import PropertyDetails from "../home/recent/PropertyDetails";

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/gallary" component={Gallary} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/recruitment/service" component={WhatWeDo} />
          <Route exact path="/recruitment/proccess" component={HowRecruit} />
          <Route exact path="/details/:id" component={BlogDetails} />
          <Route
            exact
            path="/propertydetails/:id"
            component={PropertyDetails}
          />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
