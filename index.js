const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const db = require('./db');

app.get('/welcome', (req, res) => {
    return res.send("Bienvenido a mi app")
})

// const router = require('./router');
// app.use(router);

db.then(() => {
    //Starting server
    app.listen(PORT, () => console.log("Server on port " + PORT));
})
    .catch((error) => console.log(error.message));   