const models = require('../database/models');

exports.getAll = async (req, res) => {
  let groups = await models.Group.findAll();

  if (!groups.length)
    return res.status(404).json({
      status: 'success',
      message: 'No data',
    });

  return res.status(200).json({
    status: 'success',
    groups,
  });
};
