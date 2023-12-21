const Express = require("express");
//creating express application
const app = Express();

//middleware 1
app.use((request, response, next) => {
  console.log("Inside first middleware");
  next(); //calling second middleware
});

//middleware 2
app.use((request, response, next) => {
  console.log("Inside second middleware");
  response.send({ name: "Nigam", age: "23" }); //sending response
});

//Listening on port
app.listen(3000);
