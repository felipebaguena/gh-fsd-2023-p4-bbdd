'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Patients',
    [
        {id: 1, user_id: 1, payment: 145, updatedAt: "2023-03-04", createdAt: "2023-01-12"},
        {id: 2, user_id: 2, payment: 15, updatedAt: "2023-05-04", createdAt: "2023-06-12"},
        {id: 3, user_id: 3, payment: 45, updatedAt: "2023-05-04", createdAt: "2023-06-12"},
        {id: 4, user_id: 4, payment: 96, updatedAt: "2022-02-04", createdAt: "2023-01-12"},
        {id: 5, user_id: 5, payment: 100, updatedAt: "2021-04-04", createdAt: "2023-06-12"},
        {id: 6, user_id: 6, payment: 122, updatedAt: "2022-05-04", createdAt: "2023-06-12"},
  
  
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
