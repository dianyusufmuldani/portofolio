import React from "react";

import "aos/dist/aos.css";
import { Button, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import TextApp from "../component/textApp";
import ImageProfile from "../../src/assets/profile.png";
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
const IntroductionApp = () => {
  const classes = useStyles();
  return (
    <div style={{ height: "100%" }}>
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
    </div>
  );
};

export default IntroductionApp;
