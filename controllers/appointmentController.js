const {Appointment} = require('../models');

const appointmentController = {}

appointmentController.createAppointment = async(req,res)=>{
    try{
        const {date, comments} = req.body;

        const userId = req.userId

        const newAppointment = {
            doctor_id: 1,
            patient_id: userId,
            intervention_id:1,
            date,
            comments
        }
        const appointment = await Appointment.create(newAppointment)
        return res.json(appointment)
    }catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = appointmentController;

