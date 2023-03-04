const {User, Role, UserRole, Patient} = require('../models');

const userController = {}
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

userController.createUser = async(req,res)=>{
    try{
        const {name, surname, email, password, nif, direction, birth_date, phone} = req.body;

        const encryptedPassword = bcrypt.hashSync(password,10);

        const newUser = {

            name, 
            surname, 
            email, 
            password: encryptedPassword,
            nif, 
            direction, 
            birth_date, 
            phone
        }
        const user = await User.create(newUser)

        await UserRole.create({
            user_id : user.id,
            role_id : 3
        })

        await Patient.create({
            id: user.id,
            user_id : user.id,
            payment: "cash"
        })

        return res.json(user)
    }catch (error) {
        return res.status(500).send(error.message)
    }
}

userController.login = async(req,res)=>{
    try {
        const{ email, password } = req.body;

        const user = await User.findOne(
            { 
                where:{
                    email: email
                },
                include: [Role]
            }
        );
        if(!user){
            return res.send("Wrong credentials")
        }
        const isMatch = bcrypt.compareSync(password,user.password);

        if(!isMatch){
            return res.send("Wrong credentials")
        }

        const userRoles = user.Roles;

        const token = jwt.sign(
            {
                userId: user.id,
                email: user.email,
                roles: userRoles.map((role)=> role.privilege)
            },
            'secreto',
            {expiresIn: '2h'}
        );
    return res.json(token)
    } catch (error) {
        return res.status(500).send(error.message)  
    }
}
userController.deleteUser = async(req, res) =>{
    try {
        const userId = req.params.id;
        const deleteUser = await User.destroy({where: {id: userId}})
        return res.json(deleteUser);
    } catch (error) {
        return res.status(500).send(error.message)
        
    }
}
userController.getUser = async(req, res) =>{
    try {
        const users = await User.findAll();
        return res.json(users);
    } catch (error) {
        return res.status(500).send(error.message)
        
    }
}
userController.getUserRole = async(req, res) =>{
    try {
        const userId = req.params.id;
        
        const userrole= await User.findByPk(userId,{
            include:{all: true}
        })
        return res.json(userrole);
    } catch (error) {
        return res.status(500).send(error.message)
        
    }
}











module.exports = userController;
