const orchidModel = require('../models/orchid.model');

module.exports = {
  createOrchid: async (req, res, next) => {
    const body = req.body;
    const orchid = await orchidModel.create(body);
    return res.status(201).json(orchid);
  },
};
