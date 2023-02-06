import React from "react";
import "aos/dist/aos.css";
import { Grid } from "@mui/material";

import TextApp from "./textApp";

const AboutMe = () => {
  return (
    <div id={"About Me"}>
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
    </div>
  );
};

export default AboutMe;
