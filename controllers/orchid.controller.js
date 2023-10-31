const { orchidModel, commentModel } = require('../models/orchid.model');

module.exports = {
  createOrchid: async (req, res, next) => {
    const body = req.body;
    const orchid = await orchidModel.create(body);
    return res.status(201).json(orchid);
  },
  getOrchids: async (req, res, next) => {
    const name = req.query.name;
    let bodyQuery = {};
    if (name) {
      bodyQuery.name = {
        $regex: '.*' + name + '.*',
      };
    }
    console.log(bodyQuery);
    const orchids = await orchidModel.find(bodyQuery).populate('category');
    return res.status(200).json(orchids);
  },
  getDetail: async (req, res, next) => {
    const id = req.params.id;
    const orchid = await orchidModel.findById(id).populate('category').populate("comments.author");
    console.log(orchid);
    return res.render('orchid/detail.ejs', { orchid });
  },
  comment: async (req, res, next) => {
    const account = req.account;
    const id = req.params.id;
    const bodyComment = req.body;
    bodyComment.author = account._id;
    const comment = await commentModel.create(bodyComment);
    const orchid = await orchidModel.findById(id);
    const updateOrchid = await orchidModel.findByIdAndUpdate(id, {comments: [...orchid.comments, comment]})
    return res.status(201).json(comment);
  },
};
