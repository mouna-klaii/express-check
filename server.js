const express = require("express");
const app = express();

const pug = require("pug");
const horaire = require("./middleware/horaire");
app.use(express.static("public"))

app.set("view engine", "pug");
app.set("views", "views");

app.get("/", horaire ,  function (req, res) {
  res.render("index" , {
    title :  "Home Page"
  });
});

app.get("/error" ,  function (req, res) {
  res.render("error" , {
    title :  "Error"
  });
});

app.get("/services", horaire ,  function (req, res) {
  res.render("services" , {
    title :  "Our Services"
  });
});

app.get("/contact", horaire ,  function (req, res) {
  res.render("contact" , {
    title :  "Contact Us"
  });
});

const PORT = 6320;


app.listen(PORT , error => {
    if (error) {
        console.log(error)
    }
    else {
        console.log("server is working" )
    }
})
