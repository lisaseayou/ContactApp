import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";

const useStyles = makeStyles({
  card: {
    width: "250px",
    height: "250px",
    margin: "20px",
  },

  icon: {
    fontSize: "large",
    color: "#003b57",
  },

  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  },

  fullName: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
  email: {
    fontFamily: "Quicksand",
  },
  name: {
    paddingRight: "7px",
  },
});

function ContactCard({ contact }) {
  const classes = useStyles();

  //fonction qui permet de supprimer un contact.
  const deleteContact = async () => {
    await axios.delete(`http://localhost:3030/api/contact/${contact.id}`);
  };

  const handleClickDelete = (e) => {
    deleteContact();
  };
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <AccountCircleIcon
            className={classes.icon}
            sx={{ fontSize: "80px" }}
          />
          <div className={classes.fullName}>
            <Typography
              className={classes.name}
              sx={{ fontSize: "25px", fontFamily: "Poppins", color: "#cc5800" }}
            >
              {contact.firstname}
            </Typography>

            <Typography
              sx={{ fontSize: "25px", fontFamily: "Poppins", color: "#cc5800" }}
            >
              {contact.lastname}
            </Typography>
          </div>
          <Typography className={classes.email}>{contact.email}</Typography>
        </CardContent>
        <CardActions className={classes.button}>
          <Button size="small" sx={{ color: "#003b57" }}>
            Modifier
          </Button>
          <Button
            size="small"
            sx={{ color: "#850016" }}
            onClick={handleClickDelete}
          >
            Supprimer
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default ContactCard;
