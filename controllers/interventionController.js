const {Intervention} = require('../models');

const interventionController = {}

interventionController.newIntervention = async(req, res) => {
    try {
        const { name, description, price } = req.body;

        const newIntervention = {
            name,
            description,
            price,
        }
        const intervention = await Intervention.create(newIntervention)
        return res.json(intervention)
    } catch (error) {
        return res.status(500).send(error.message)
    }
};


module.exports = interventionController;