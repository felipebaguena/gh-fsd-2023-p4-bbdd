'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Appointments',
    [
    
      {id: 1, doctor_id: 1, patient_id: 4, intervention_id: 3,  updatedAt: "2023-01-04", createdAt: "2023-01-12"},
      {id: 2, doctor_id: 2, patient_id: 5, intervention_id: 2,  updatedAt: "2023-02-05", createdAt: "2023-01-12"},
      {id: 3, doctor_id: 2, patient_id: 6, intervention_id: 1,  updatedAt: "2023-03-06", createdAt: "2023-01-12"}

    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
