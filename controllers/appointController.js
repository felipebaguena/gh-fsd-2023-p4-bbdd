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

appointController.updateAppointment = async (req, res) => {
    try {
        const { id, date } = req.body;
        const patient_id = req.userId;

        const appointment = await Appointment.findOne({
            where: {
                id: id,
                patient_id: patient_id
            }
        });

        if (!appointment) {
            return res.status(404).send('Appointment not found');
        }

        await appointment.update({
            date: date
        });

        return res.send('Appointment updated');

    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = appointController;