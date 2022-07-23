const pin = require('../routes/pin');

module.exports = function (app) {
  app.use('/api/pins', pin);
  app.all('*', (req, res, next) => next(new Error(`Undefined Route! 🤪`)));
};
