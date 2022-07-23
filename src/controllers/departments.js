const models = require('../database/models');

exports.getAll = async (req, res) => {
  let departments = await models.Department.findAll();

  if (!departments.length)
    return res.status(404).json({
      status: 'success',
      message: 'No data',
    });

  return res.status(200).json({
    status: 'success',
    departments,
  });
};
