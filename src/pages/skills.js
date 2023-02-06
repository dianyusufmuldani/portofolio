import React from "react";

import "aos/dist/aos.css";
import { Grid } from "@mui/material";
import TextApp from "../component/textApp";
import Rating from "@mui/material/Rating";

const Skills = () => {
  return (
    <div id={"Skills"}>
      <Grid
        container
        spacing={2}
        data-aos="fade-right"
        data-aos-duration={1000}
        style={{ marginBottom: 30 }}
      >
        <Grid item md={6} style={{ paddingLeft: 80, paddingRight: 80 }}>
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
    </div>
  );
};

export default Skills;
