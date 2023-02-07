import React, { useEffect } from "react";
import NavBar from "../component/navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { Grid } from "@mui/material";
import Bg from "../../src/assets/bg.png";
import TextApp from "../component/textApp";
import AboutMe from "./aboutme";
import Skills from "./skills";
import Fundamental from "./fundamental";
import ContactApp from "./contact";
import IntroductionApp from "./introduction";
import Project from "./project";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${Bg})`,
        width: "100%",
      }}
    >
      <NavBar />
      <IntroductionApp />
      <AboutMe />
      <Skills />
      <Fundamental />
      <Project />
      <ContactApp />
      <Grid
        container
        spacing={2}
        data-aos="fade-right"
        data-aos-duration={1000}
      >
        <Grid
          items
          md={12}
          style={{ textAlign: "center", marginTop: 200, width: "100%" }}
        >
          <TextApp
            value={"© copyright 2023 by Dian Yusuf Muldani"}
            fontSize={20}
            fontWeight={"300"}
          />

          <br />
          <br />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
