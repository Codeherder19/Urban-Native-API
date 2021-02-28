const cropsSeedData = require('../cropsSeedData');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('crops').del()
    .then(function () {
      // Inserts seed entries
      return knex('crops').insert(cropsSeedData);
    });
};
