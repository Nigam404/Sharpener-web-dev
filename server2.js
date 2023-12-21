const express = require("express");
const bodyParser = require("body-parser");

//Express app
const app = express();

//global middleware- Executes everytime
app.use(bodyParser.urlencoded({ extended: false })); //extended: false to avoid parsing default characteristic of request

//GET-route middleware '/'  ...we can use app.get or app.use. Both will do same work.
app.get("/", (req, res, next) => {
  res.send(
    `<h4>Welcome to my Express js project- go to <i><b>/add-product</b></i> to add product.</h4>`
  );
});

//GET-route middleware '/add-product'
app.get("/add-product", (req, res, next) => {
  res.send(`<form action='/product' method='POST'>
    <input type='text' name='title' placeholder='Enter product name'>
    <input type='number' name='size' placeholder='Enter quantity'>
    <button>Submit</button>
</form>`);
});

//POST-route middleware '/product'.
app.post("/product", (req, res, next) => {
  res.redirect("/"); //redirect to path '/'.
  console.log(req.body.title); //it will be undefined if we dont use 'body-parser' middleware.
  console.log(req.body.size);
});

app.listen(3000);
