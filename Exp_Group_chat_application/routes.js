//I'll be storing all routes here.
const express = require("express");
const fs = require("fs");

const router = express.Router();

//GET-path for "/login" url.........................
router.get("/login", (req, res, next) => {
  res.send(
    `<form onsubmit='localStorage.setItem("username", document.getElementById("user_name").value)' action='/' method='GET'>
      Enter Username-<input type='text' name='username' id='user_name'>
      <button>Submit</button>
      </form>`
  );
});

//GET-path for "/" url.........................
router.get("/", (req, res, next) => {
  fs.readFile("chatmessage.txt", "utf-8", (err, data) => {
    if (err) {
      console.log("Error= ", err);
    } else {
      res.send(
        `<p>${data}</p>
          <form onsubmit='document.getElementById("user_name").value=localStorage.getItem("username")'  action='/savefile' method='POST'>
              Enter message-<input type='text' name='message'>
              <input type='hidden' name='username' id='user_name'>
              <button>Send</button>
          </form>`
      );
    }
  });
});

//POST-path for "/savefile" url.........................
router.post("/savefile", (req, res, next) => {
  let user = req.body.username;
  let msg = req.body.message;
  let user_with_message = user + " : " + msg;

  fs.appendFile("chatmessage.txt", user_with_message, (err) => {});
  res.redirect("/");
});

module.exports = router;
