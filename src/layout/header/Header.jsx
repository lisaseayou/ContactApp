import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles({
  title: {
    fontFamily: "Montserrat",
    fontSize: "50px",
    color: "white",
    display: "flex",
    justifyContent: "center",
    paddingTop: "25px",
  },

  header: {
    width: "100%",
    height: "150px",
    backgroundColor: "#003b57",
  },
});

function Header(props) {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Typography className={classes.title}>Mes Contacts</Typography>
    </div>
  );
}

export default Header;
