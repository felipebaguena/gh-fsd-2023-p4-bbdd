const {User, Role, UserRole, Patient, Appointment, Intervention, Doctor} = require('../models');

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


userController.profile = async(req, res) => {
    try {
        const userId = req.userId;
        const user = await User.findByPk(userId)

        return res.json(user);
    } catch (erro) {
        return res.status(500).json(    
            {
                success: false,
                message:"Something went wrong",
                error_message: error.message
            }
        )
    }
}


userController.updateUser = async (req, res) => {
    try {
        const { name, surname, email, password, nif, direction, birth_date, phone } = req.body;
        const userId = req.userId;

        const encryptedPassword = bcrypt.hashSync(password, 10);

        const updateUSer = await User.update(
            {

            name,
            surname,
            email,
            password: encryptedPassword,
            nif,
            direction,
            birth_date,
            phone

            },
            {
                where: {
                    id: userId
                }
            }
        );

        if (!updateUSer) {
            return res.send('User not updated')
        }

        return res.send('User updated')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// VER CITAS

userController.getAppointment = async (req, res) => {
    try {
        let userAppointment;

        if (req.roles.includes("Doctor")) {
            userAppointment = await Appointment.findAll(
                {
                    where: {
                        doctor_id: req.userId
                    },
                    include: [
                        Intervention,
                        {
                            model: Patient,
                            attributes: {
                                exclude: ["user_id", "role_id", "createdAt", "updatedAt"]
                            },
                        },
                    ],
                    attributes: {
                        exclude: ["patient_id", "intervention_id"]
                    }
                }
            )
        } else {
            userAppointment = await Appointment.findAll(
                {
                    where: {
                        patient_id: req.userId
                    },
                    include: [
                        Intervention,
                        {
                            model: Patient,
                            attributes: {
                                exclude: ["user_id", "role_id", "createdAt", "updatedAt"]
                            },
                        },
                    ],
                    attributes: {
                        exclude: ["patient_id", "intervention_id"]
                    }
                }
            )
        }

        return res.json(userAppointment)
    } catch (error) {

        return res.status(500).send(error.message)
    }
}


// TERRITORIO ADMIN

userController.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: { exclude: ['password'] } // Excluye la contraseña de los resultados
        });

        return res.json(users);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

userController.getDoctors = async (req, res) => {
    try {
        const doctors = await User.findAll({
            include: [
              {
                model: Role,
                where: {
                  privilege: "Doctor",
                },
              },
            ],
            attributes: { exclude: ['password'] },
          });
      return res.json(doctors);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  



module.exports = userController;
