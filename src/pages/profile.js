import React from "react";
import NavBar from "../component/navbar";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  root: {
    backgroundColor: "red",
    height: "100%",
  },
});

const Profile = () => {
  const classes = useStyles();
  return (
    <div
      id="Profile"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-vector/white-abstract-background_23-2148817571.jpg')`,
      }}
    >
      <NavBar />
      <h1>PROFILE</h1>
      <button className={classes.button}>CLICK HERE!</button>
    </div>
  );
};

export default Profile;
