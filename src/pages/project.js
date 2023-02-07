import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import "aos/dist/aos.css";
import ImageTransEvilz from "../assets/transevilz.jpg";
import ImageSplitBill from "../assets/splitbill.jpg";
import ImageTransEvilz2 from "../assets/transevilz2.jpg";
import ImageSplitBill2 from "../assets/splitbill2.jpg";
import ImagePortofolio from "../assets/portofolio.jpg";

const Project = () => {
  return (
    <div id={"Projects"}>
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
            width: "100%",
          }}
        >
          <h1 style={{ fontSize: 40, color: "#26B03D" }}>PROJECTS</h1>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        data-aos="fade-right"
        data-aos-duration={1000}
      >
        <Grid
          item
          md={4}
          style={{
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            gap: 30,
            width: "100%",
          }}
        >
          <Card
            sx={{ maxWidth: 345 }}
            style={{
              backgroundColor: "#575957",
            }}
          >
            <CardContent>
              <div
                style={{
                  gap: 30,
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: 10,
                }}
              >
                <img
                  src={ImageTransEvilz}
                  style={{ width: "30%", height: "30%" }}
                  alt={"Trans Evilz"}
                />
                <img
                  src={ImageTransEvilz2}
                  style={{ width: "30%", height: "30%" }}
                  alt={"Trans Evilz 2"}
                />
              </div>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ color: "#CACFCA", fontWeight: "700" }}
              >
                Trans Evilz
              </Typography>
              <Typography
                gutterBottom
                variant="h9"
                component="div"
                style={{ color: "#CACFCA", fontWeight: "400" }}
              >
                Role: Frontend React Native
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ color: "#BBBBBB" }}
              >
                Trans Evilz is a mobile application which is a mini project and
                features registration, account login, history and transfer
                services.
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "center" }}>
              <Button
                size="small"
                style={{
                  backgroundColor: "#09A709",
                  color: "#FFFFFF",
                }}
                href={
                  "https://drive.google.com/file/d/1pQs40quxDxPVWKejetlKoq0B1K6evIV7/view?usp=share_link"
                }
              >
                Check application
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          md={4}
          style={{
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            gap: 30,
            width: "100%",
          }}
        >
          <Card
            sx={{ maxWidth: 345 }}
            style={{
              backgroundColor: "#575957",
            }}
          >
            <CardContent>
              <div
                style={{
                  gap: 30,
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: 10,
                }}
              >
                <img
                  src={ImageSplitBill}
                  style={{ width: "30%", height: "30%" }}
                  alt={"Split Bill"}
                />
                <img
                  src={ImageSplitBill2}
                  style={{ width: "30%", height: "30%" }}
                  alt={"Split Bill 2"}
                />
              </div>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ color: "#CACFCA", fontWeight: "700" }}
              >
                SplitBill
              </Typography>
              <Typography
                gutterBottom
                variant="h9"
                component="div"
                style={{ color: "#CACFCA", fontWeight: "400" }}
              >
                Role: Frontend React Native
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ color: "#BBBBBB" }}
              >
                Split Bill is a react native application for mobile android
                which has the function to add or delete a list of food orders.
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "center" }}>
              <Button
                size="small"
                style={{
                  backgroundColor: "#09A709",
                  color: "#FFFFFF",
                }}
              >
                Check application
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          md={4}
          style={{
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            gap: 30,
            width: "100%",
          }}
        >
          <Card
            sx={{ maxWidth: 345 }}
            style={{
              backgroundColor: "#575957",
            }}
          >
            <CardContent>
              <div
                style={{
                  gap: 30,
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: 10,
                }}
              >
                <img
                  src={ImagePortofolio}
                  style={{
                    width: "80%",
                    height: 150,
                    marginTop: 20,
                    marginBottom: 35,
                  }}
                  alt={"Portofolio"}
                />
              </div>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ color: "#CACFCA", fontWeight: "700" }}
              >
                Profile Portofolio
              </Typography>
              <Typography
                gutterBottom
                variant="h9"
                component="div"
                style={{ color: "#CACFCA", fontWeight: "400" }}
              >
                Role: Frontend React JS
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ color: "#BBBBBB" }}
              >
                This is a website creation project using Reactjs as a frontend
                and Material UI for the CSS framework. Serves as a portfolio.
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "center" }}>
              <Button
                size="small"
                style={{
                  backgroundColor: "#09A709",
                  color: "#FFFFFF",
                }}
                href={"https://flourishing-taffy-a2338f.netlify.app/"}
              >
                Check application
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Project;
