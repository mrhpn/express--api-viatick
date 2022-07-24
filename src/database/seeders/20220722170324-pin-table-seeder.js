'use strict';

const _ = require('lodash');

const initialData = [
  {
    long: 1.3629,
    lang: 103.75336,
    image: 'https://loremflickr.com/g/320/240/factory',
  },
  {
    long: 1.3644,
    lang: 103.75259,
    image: 'https://loremflickr.com/g/320/240/paris',
  },
  {
    long: 1.3642,
    lang: 103.74962,
    image: 'https://loremflickr.com/g/320/240/building',
  },
  {
    long: 1.36242,
    lang: 103.7481,
    image: 'https://loremflickr.com/g/320/240/cars',
  },
  {
    long: 1.36664,
    lang: 103.74923,
    image: 'https://loremflickr.com/g/320/240/people',
  },
  {
    long: 1.37054,
    lang: 103.75274,
    image: 'https://loremflickr.com/g/320/240/cat',
  },
  {
    long: 1.37062,
    lang: 103.75579,
    image: 'https://loremflickr.com/g/320/240/dog',
  },
  {
    long: 1.36628,
    lang: 103.75829,
    image: 'https://loremflickr.com/g/320/240/code',
  },
  {
    long: 1.36332,
    lang: 103.75623,
    image: 'https://loremflickr.com/g/320/240/success',
  },
  {
    long: 1.3636,
    lang: 103.756,
    image: 'https://loremflickr.com/g/320/240/football',
  },
  {
    long: 1.3629,
    lang: 103.7501,
    image: 'https://loremflickr.com/g/320/240/golf',
  },
];
const pins = initialData.map((d, index) => ({
  name: `Camera-${index + 1}`,
  long: d.long,
  lang: d.lang,
  remarks: 'this is remark',
  is_alert: _.random(1, 2) === 1 ? true : false,
  image: d.image,
  department_id: _.sample([4, 14, 24]),
  group_id: _.sample([4, 14, 24]),
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

  async down(queryInterface) {
    await queryInterface.bulkDelete('pins', null);
  },
};
