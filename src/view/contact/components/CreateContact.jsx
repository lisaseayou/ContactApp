import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
    color: "black",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "white",
    width: "40%",
    backgroundColor: "#003b57",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "20px",
    "&:hover": {
      background: "#cc5800",
      color: "white",
    },
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(0, 0, 2),
      width: "100%",
    },
  },
  contact: {
    margin: "30px",
    color: "#cc5800",
    textAlign: "center",
    fontWeight: 500,
    fontSize: "30px",
    fontFamily: "Poppins",
  },
  input: {
    backgroundColor: "white",
    borderRadius: "8px",
  },
  button: {
    display: "flex",
    justifyContent: "center",
  },
}));

function CreateContact(props) {
  const classes = useStyles();

  const [form, setForm] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  //fonction qui permet de poster un nouveau contact en base de donée.
  const createContact = () => {
    axios.post("http://localhost:3030/api/contact", form);
  };

  //fonction qui surveille les inputs pour récupérer leur valeur.
  const handleTextFieldChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    createContact();
  };
  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <CssBaseline />
      <div>
        <Typography className={classes.contact}>
          <strong>AJOUTER UN CONTACT</strong>
        </Typography>

        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                className={classes.input}
                autoComplete="prénom"
                name={"firstname"}
                variant="outlined"
                required
                fullWidth
                id="firstname"
                label="Prénom"
                autoFocus
                onChange={handleTextFieldChange}
                value={form.firstname}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                className={classes.input}
                variant="outlined"
                required
                fullWidth
                id="lastname"
                label="Nom"
                name={"lastname"}
                autoComplete="lastname"
                onChange={handleTextFieldChange}
                value={form.lastname}
                rows={4}
                rowsMax={7}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.input}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="email"
                name={"email"}
                autoComplete="email"
                onChange={handleTextFieldChange}
                value={form.email}
              />
            </Grid>
          </Grid>
          <div className={classes.button}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              AJOUTER
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default CreateContact;
