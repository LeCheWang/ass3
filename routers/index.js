const authRouter = require('./auth.router');
const homeRouter = require('./home.router');
const accountRouter = require('./account.router');
const adminRouter = require('./admin.router');
const categoryRouter = require('./category.router');
const orchidRouter = require('./orchid.router');

const errorHandle = require('../middlewares/error.handle');

module.exports = (app) => {
  app.use('/auth/', authRouter);
  app.use('/home/', homeRouter);
  app.use('/accounts', accountRouter);
  app.use('/admin', adminRouter);
  app.use('/categories', categoryRouter);
  app.use('/orchid', orchidRouter);

  app.use(errorHandle);
};
