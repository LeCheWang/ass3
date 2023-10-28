const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const accountSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    yob: {
      type: Number,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

accountSchema.pre('save', function (next) {
  const account = this;
  if (account.password) {
    account.password = bcryptjs.hashSync(account.password, 10);
  }
  next();
});

accountSchema.pre('findOneAndUpdate', function (next) {
  const account = { ...this.getUpdate() };
  if (account.password) {
    account.password = bcryptjs.hashSync(account.password, 10);
  }
  this.setUpdate(account);
  next();
});

accountSchema.pre('findByIdAndUpdate', function (next) {
  const account = { ...this.getUpdate() };
  if (account.password) {
    account.password = bcryptjs.hashSync(account.password, 10);
  }
  this.setUpdate(account);
  next();
});

module.exports = mongoose.model('account', accountSchema);
