const authRouter = require('./auth.router');
const homeRouter = require('./home.router');
const accountRouter = require('./account.router');
const errorHandle = require('../middlewares/error.handle');

module.exports = (app) => {
  app.use('/auth/', authRouter);
  app.use('/home/', homeRouter);
  app.use('/accounts', accountRouter);

  app.use(errorHandle);
};
