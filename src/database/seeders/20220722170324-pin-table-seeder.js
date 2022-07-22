'use strict';

const _ = require('lodash');

const geolocations = [
  { long: 1.3629, lang: 103.75336 },
  { long: 1.3644, lang: 103.75259 },
  { long: 1.3642, lang: 103.74962 },
  { long: 1.36242, lang: 103.7481 },
  { long: 1.36664, lang: 103.74923 },
  { long: 1.37054, lang: 103.75274 },
  { long: 1.37062, lang: 103.75579 },
  { long: 1.36628, lang: 103.75829 },
  { long: 1.36332, lang: 103.75623 },
  { long: 1.3636, lang: 103.756 },
  { long: 1.3629, lang: 103.7501 },
];
const pins = geolocations.map((location, index) => ({
  name: `Camera-${index + 1}`,
  long: location.long,
  lang: location.lang,
  remarks: 'this is remark',
  is_alert: _.random(1, 2) === 1 ? true : false,
  image: '',
  department_id: _.random(1, 3),
  group_id: _.random(1, 3),
  created_at: new Date(),
  updated_at: new Date(),
}));

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      'ALTER TABLE pins AUTO_INCREMENT = 1;'
    ); // to avoid foreign_key constraints

    await queryInterface.bulkInsert('pins', pins);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pins', null);
  },
};
