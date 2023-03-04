'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Interventions',
    [
        {id: 1, name: "Ortodoncia invisible", description: "description:Los alineadores invisibles están indicados para corregir el apiñamiento dental, dientes torcidos o mal posicionados, diastemas o espacios entre los dientes, sobre mordida y mordida cruzada.", price: 950, updatedAt: "2023-03-04", createdAt: "2023-01-12"},
        {id: 2, name: "Limpieza dental avanzada", description: "La limpieza dental avanzada es una técnica de higiene bucal basada en la acción del polvo de bicarbonato de sodio, el cual ayuda a eliminar el sarro y las manchas de los dientes causadas por agentes externos. Es un tratamiento bastante agradecido, ya que ayudará a mantener un óptimo estado de salud gingiva.", price: 53.34 , updatedAt: "2023-04-02", createdAt: "2023-02-11"},
        {id: 3, name: "Blanqueamiento dental", description: " El blanqueamiento dental mejora la estética en la sonrisa de los pacientes, utilizando técnicas y materiales mínimamente invasivos. Es un tratamiento muy popular porque ofrece resultados notables", price: 220, updatedAt: "2023-04-04", createdAt: "2023-03-12"},

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
