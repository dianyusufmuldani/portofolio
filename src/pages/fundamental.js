import React from "react";
import "aos/dist/aos.css";
import { Grid } from "@mui/material";
import ImageNodejs from "../../src/assets/nodejs.png";
import ImageMaterialUi from "../../src/assets/materialui.png";

const Fundamental = () => {
  return (
    <div id={"Fundamental"}>
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
    </div>
  );
};

export default Fundamental;
