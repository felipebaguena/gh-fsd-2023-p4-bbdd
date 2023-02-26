const express = require('express');
const app = express();
const PORT = 3000;
const { User } = require('./models/index') 
const { Role } = require('./models/index')  
app.use(express.json());

const db = require('./db');


app.get('/welcome', (req, res) => {
    return res.send("Bienvenido a mi app")
})

app.post('/users', async(req,res) =>{
    const {name, surname, nif, birth_date, direction, email, phone, password} = req.body;

    const newUser = {
        name,
        surname,
        nif,
        birth_date,
        direction,
        email,
        phone,
        password
    }
    const user = await User.create(newUser)
    return res.json(user)
})

app.delete('/users/:id', async(req, res) => {
    const userId = req.params.id;
    
    const deleteUser = await User.destroy({where: { id: userId}})

    return res.json(deleteUser);
})

app.get('/users', async(req, res)=> {
    const users = await User.findAll();
    return res.json(users);
})

app.post('/roles', async(req,res) =>{
    const {privilege} = req.body;

    const newPrivilege = {
    privilege
    }
    const role = await Role.create(newPrivilege)
    return res.json(role)
})


db.then(() => {
    //Starting server
    app.listen(PORT, () => console.log("Server on port " + PORT));
})
    .catch((err) => console.log(err.message));   
