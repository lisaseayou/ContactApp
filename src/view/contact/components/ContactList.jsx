import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  list: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginTop: "40px",
    marginBottom: "50px",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  searchBar: {
    width: "600px",
    height: "50px",
    borderRadius: "5px",
    borderColor: "#003b57",
  },

  search : {
    fontFamily : "Poppins", 
    color: "#003b57", 
    fontSize: "20px"
  }, 

  title : {
    display : "flex",
    justifyContent: "center",
    alignItems : "center", 
    marginTop: "30px",
    padding: "10px"
  }
}));

function ContactList() {
  const classes = useStyles();

  const [contacts, setContacts] = useState([]);
  const [searchContacts, setSearchContacts] = useState("");

  //fonction qui affiche tous les contacts présents dans la base de donée.
  useEffect(() => {
    axios
      .get("http://localhost:3030/api/contact")
      .then((response) => response.data)
      .then((data) => {
        setContacts(data);
      });
  });
  //fonction qui surveille ce qui est tapé dans la barre de recherche, pour pouvoir effectuer une recherche par prénoms dans les contacts.
  const handleSearchContacts = (e) => {
    let value = e.target.value;
    setSearchContacts(value);
    console.log(searchContacts);
  };

  return (
    <>
    <div className={classes.title}>
    <SearchIcon />
    <Typography className={classes.search}>Rechercher dans mes contacts : </Typography>
    </div>
      <TextField
        variant="outlined"
        type="text"
        name="searchBar"
        placeholder="Rechercher un contact"
        onChange={handleSearchContacts}
        className={classes.searchBar}
      ></TextField>

      <div className={classes.list}>
        {contacts
          .filter((contact) => {
            return contact.firstname
              .toLowerCase()
              .includes(searchContacts.toLocaleLowerCase());
          })
          .map((contact, index) => (
            <ContactCard contact={contact} key={index} />
          ))}
      </div>
    </>
  );
}

export default ContactList;
