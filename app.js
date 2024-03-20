const express = require("express");

const db = require("./data/database");

const app = express();

app.use(express.json())

app.use((error, req, res, next) => {
    res.status(500).json({
        message: "Something went wrong!"
    })
})

db.initDb()
  .then((result) => {
    app.listen(3000, () => console.log("Server start at port 3000!"));
  })
  .catch((err) => {
    console.log(err);
  });
