const { Op } = require('sequelize');
const models = require('../database/models');

exports.getAll = async (req, res) => {
  const { departmentId, groupId, name } = req.query;

  let pins = await models.Pin.findAll({
    where:
      (departmentId && { departmentId }) ||
      (groupId && { groupId }) ||
      (name && { name: { [Op.like]: `%${name}%` } }) ||
      {},
    include: [
      {
        model: models.Department,
        as: 'department',
        attributes: ['departmentId', 'name'],
      },
      {
        model: models.Group,
        as: 'group',
        attributes: ['groupId', 'name'],
      },
    ],
  });

  if (!pins.length)
    return res.status(404).json({
      status: 'success',
      message: 'No data',
    });

  return res.status(200).json({
    status: 'success',
    pins,
  });
};

exports.getOne = async (req, res) => {
  const { pinId } = req.params;

  const pin = await models.Pin.findOne({
    where: { pinId },
    include: [
      {
        model: models.Department,
        as: 'department',
        attributes: ['departmentId', 'name'],
      },
      {
        model: models.Group,
        as: 'group',
        attributes: ['groupId', 'name'],
      },
    ],
  });

  if (!pin)
    return res.status(404).json({
      status: 'success',
      message: 'No data',
    });

  return res.status(200).json({
    status: 'success',
    pin,
  });
};

exports.getRedPinsCount = async (req, res) => {
  let totalCount = await models.Pin.count({
    where: { is_alert: true },
  });

  return res.status(200).json({
    status: 'success',
    totalCount,
  });
};
