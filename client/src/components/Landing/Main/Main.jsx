import React from "react";

import Feature from "./Sections/Feature";
import Movie from "./Sections/Movie";
import Mobile from "./Sections/Mobile";
import Gallary from "./Sections/Gallary";
import Contact from "./Sections/Contact";

const Main = () => {
  return (
    <main>
      <Feature />
      <Movie />
      <Mobile />
      <Gallary />
      <Contact />
    </main>
  );
};

export default Main;
