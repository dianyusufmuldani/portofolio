import React from "react";
import "aos/dist/aos.css";
import { Grid } from "@mui/material";
import TextApp from "../component/textApp";

const ContactApp = () => {
  return (
    <div>
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
        <Grid
          items
          md={6}
          style={{ textAlign: "center", width: "100%", paddingLeft: 20 }}
        >
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
    </div>
  );
};

export default ContactApp;
