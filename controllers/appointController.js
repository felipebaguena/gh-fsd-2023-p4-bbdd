const {Appointment} = require('../models');

const appointController = {}

appointController.getAppoint = (req, res) => {
    res.status(200).send('Todo está correcto');
}

appointController.createAppoint = async(req, res) => {
    try {
        const { doctor_id, intervention_id, date, comments } = req.body;
        const userId = req.userId;
        const newAppointment = {
            doctor_id,
            patient_id : userId,
            intervention_id,
            date,
            comments
        }
        const appointment = await Appointment.create(newAppointment)
        return res.json(appointment)
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

module.exports = appointController;
