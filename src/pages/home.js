import React, { useEffect } from "react";
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
  return (
    <div
      style={{
        backgroundImage: `url(${Bg})`,
      }}
    >
      <NavBar />
      <Grid container spacing={2} style={{ alignItems: "center" }}>
        <Grid item md={6} className={classes.identity}>
          <TextApp value={`Hello, I'am`} fontSize={38} fontWeight={"700"} />
          <h1 style={{ fontSize: 44, color: "#26B03D" }}>DIAN YUSUF MULDANI</h1>
          <TextApp
            value={`Frontend Developer React JS & React Native`}
            fontSize={34}
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
              width: 450,
              height: 580,
            }}
            alt="profile"
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} data-aos="fade-left" data-aos-duration={1000}>
        <Grid
          item
          md={6}
          style={{
            textAlign: "center",
            alignSelf: "center",
          }}
        >
          <img
            src={
              "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220416200936/Top-10-Front-End-Developer-Skills-That-You-Need-in-2022.png"
            }
            style={{ width: "80%", borderRadius: 70 }}
            alt="developer frontend"
          />
        </Grid>
        <Grid item md={6} style={{ paddingLeft: 80, paddingRight: 80 }}>
          <h1 style={{ fontSize: 40, color: "#26B03D" }}>ABOUT ME</h1>
          <TextApp
            value={`My name is Dian Yusuf Muldani, you can call me Yusuf. I come from Ciamis, West Java, Indonesia and now I live in Yogyakarta. I was a junior frontend developer for react js and react native from 2022 to 2023. I'd love it if you invited me to join your team, and hopefully we can work together.`}
            fontSize={30}
            fontWeight={"400"}
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        data-aos="fade-right"
        data-aos-duration={1000}
        style={{ marginBottom: 30 }}
      >
        <Grid item md={6} style={{ paddingLeft: 60, paddingRight: 60 }}>
          <h1 style={{ fontSize: 40, color: "#26B03D" }}>SKILLS</h1>
          <TextApp
            value={`During this experience that I have, I have skills in doing several developers both web and mobile.`}
            fontSize={30}
            fontWeight={"400"}
          />
        </Grid>
        <Grid item md={6} style={{ paddingLeft: 80, paddingRight: 80 }}>
          <TextApp
            value={`REACT JS (FRONTEND WEB DEVELOPER)`}
            fontSize={30}
            fontWeight={"400"}
          />
          <Rating name="rating" defaultValue={3.5} precision={0.5} readOnly />
          <TextApp
            value={`REACT NATIVE (FRONTEND MOBILE DEVELOPER)`}
            fontSize={30}
            fontWeight={"400"}
          />
          <Rating name="rating" defaultValue={4} precision={0.5} readOnly />
          <TextApp
            value={`NODE JS (BACKEND DEVELOPER)`}
            fontSize={30}
            fontWeight={"400"}
          />
          <Rating name="rating" defaultValue={3.5} precision={0.5} readOnly />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        data-aos="fade-right"
        data-aos-duration={1000}
      >
        <Grid
          items
          md={12}
          style={{
            textAlign: "center",
            backgroundColor: "#575957",
          }}
        >
          <h1 style={{ fontSize: 40, color: "#26B03D" }}>FUNDAMENTAL SKILLS</h1>
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            }
            style={{ width: 250, height: 250, marginLeft: 20 }}
            alt="react"
          />
          <img
            src={ImageNodejs}
            style={{ width: 250, height: 220, marginLeft: 20 }}
            alt="nodejs"
          />
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
            }
            style={{ width: 250, height: 250, marginLeft: 20 }}
            alt="react"
          />
          <img
            src={ImageMaterialUi}
            style={{ width: 250, height: 250, marginLeft: 20 }}
            alt="react"
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        data-aos="fade-right"
        data-aos-duration={1000}
        style={{ marginTop: 20 }}
        // style={{ backgroundColor: "#575957" }}
      >
        <Grid items md={6} style={{ paddingLeft: 60 }}>
          <h2 style={{ fontSize: 30, color: "#26B03D" }}>
            Contact me at the following contacts
          </h2>
          <a href={"https://www.facebook.com/dian.yusuf.muldani"}>
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              }
              style={{ width: 50, height: 50, marginRight: 20 }}
              alt="facebook"
            />
          </a>
          <a href={"https://wa.me/6285349394103"}>
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
              }
              style={{ width: 50, height: 50, marginRight: 20 }}
              alt="whatsapp"
            />
          </a>
          <a href={"https://twitter.com/DianYusufM"}>
            <img
              src={
                "https://www.freepnglogos.com/uploads/512x512-logo-png/512x512-logo-twitter-icon-smooth-app-iconset-ampeross-29.png"
              }
              style={{ width: 50, height: 50, marginRight: 20 }}
              alt="twitter"
            />
          </a>
          <a href={"https://www.instagram.com/dianyusufmuldani/"}>
            <img
              src={
                "https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-new-logo-vector-download-13.png"
              }
              style={{ width: 50, height: 50, marginRight: 20 }}
              alt="instagram"
            />
          </a>
          <a href={"https://id.linkedin.com/in/dian-yusuf-muldani-74b00a93"}>
            <img
              src={
                "https://www.freepnglogos.com/uploads/linkedin-basic-round-social-logo-png-13.png"
              }
              style={{ width: 50, height: 50, marginRight: 20 }}
              alt="linkedin"
            />
          </a>
        </Grid>
        <Grid items md={6} style={{ textAlign: "center" }}>
          <img
            src={
              "https://www.freepnglogos.com/uploads/logo-gmail-png/logo-gmail-png-gmail-icon-download-png-and-vector-1.png"
            }
            style={{ width: 70, height: 70 }}
            alt="gmail"
          />
          <TextApp
            value={"dianyusufmuldani@gmail.com"}
            fontSize={26}
            fontWeight={"500"}
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        data-aos="fade-right"
        data-aos-duration={1000}
      >
        <Grid items md={12} style={{ textAlign: "center", marginTop: 200 }}>
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
