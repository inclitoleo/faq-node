const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req,res) => {
    res.send("Bem vindo ao FAQ NODE");
});

app.listen(port, () => {
    console.log("Servidor online");
});
