const pin = require('../routes/pin');
const department = require('../routes/department');
const group = require('../routes/group');

module.exports = function (app) {
  app.use('/api/pins', pin);
  app.use('/api/departments', department);
  app.use('/api/groups', group);
  app.all('*', (req, res, next) => next(new Error(`Undefined Route! 🤪`)));
};
