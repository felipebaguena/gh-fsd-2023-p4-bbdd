'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      doctor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Doctors",
          key:"id"
        } 
      },
      patient_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Patients",
          key:"id"
        } 
      },
      intervention_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Interventions",
          key:"id"
        } 
      },
      date: {
        type: Sequelize.DATE
      },
      comments: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Appointments');
  }
};