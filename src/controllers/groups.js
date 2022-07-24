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

exports.create = async (req, res) => {
  let [groupName, pins] = req.body;

  // check if group name already exists
  const isExisted = await models.Group.findAll({ where: { name: groupName } });
  if (isExisted.length !== 0)
    return res.status(409).json({
      status: 'fail',
      message: 'Group name already exists',
    });

  // create a group
  const { groupId } = await models.Group.create({ name: groupName });

  // update pins
  const results = await Promise.allSettled(
    pins.map((pin) =>
      models.Pin.update({ groupId }, { where: { pinId: pin.pinId } })
    )
  );

  // check if all operations complete
  const error = results.find((r) => r.status !== 'fulfilled');
  if (error)
    return res.status(500).json({
      status: 'fail',
      message: 'Something went wrong',
    });
  else
    return res.status(200).json({
      status: 'success',
      message: 'Operation completed',
    });
};
