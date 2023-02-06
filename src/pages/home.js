import React, { useEffect, useRef } from "react";
import NavBar from "../component/navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import Bg from "../../src/assets/bg.png";
import TextApp from "../component/textApp";
import ImageProfile from "../../src/assets/profile.png";
import Rating from "@mui/material/Rating";
import ImageNodejs from "../../src/assets/nodejs.png";

import ImageMaterialUi from "../../src/assets/materialui.png";
import AboutMe from "../component/aboutme";
import Skills from "./skills";
import Fundamental from "./fundamental";
import ContactApp from "./contact";

const useStyles = makeStyles({
  identity: {
    textAlign: "center",
  },
  button: {
    fontSize: 26,
    backgroundColor: "#2FFC1F",
    borderRadius: 20,
    padding: 20,
  },
});

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const classes = useStyles();
  const ref = useRef(null);
  const handleScroll = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      style={{
        backgroundImage: `url(${Bg})`,
        width: "100%",
      }}
    >
      <NavBar />
      <Grid container spacing={2} style={{ alignItems: "center" }}>
        <Grid
          item
          md={6}
          className={classes.identity}
          style={{
            alignSelf: "center",
            width: "100%",
          }}
        >
          <TextApp value={`Hello, I'am`} fontSize={38} fontWeight={"700"} />
          <h1 style={{ fontSize: 44, color: "#26B03D" }}>DIAN YUSUF MULDANI</h1>

          <TextApp
            value={`Frontend Developer React JS & React Native`}
            fontSize={24}
            fontWeight={"700"}
          />

          <a href="https://wa.me/6285349394103">
            <Button
              variant="contained"
              style={{ backgroundColor: "green", fontSize: 22 }}
            >
              Chat Whatsapp
            </Button>
          </a>
        </Grid>
        <Grid item md={6} style={{ textAlign: "center" }}>
          <img
            src={ImageProfile}
            style={{
              width: "70%",
              height: "70%",
            }}
            alt="profile"
          />
        </Grid>
      </Grid>
      <AboutMe />

      <Skills />

      <Fundamental />

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
