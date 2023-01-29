const User = require("../Model/User");
const serverError = require("../utils/serverError");

const createSessionID = (req, res) => {
  const { sessionID } = req.body;
  new User({ sessionID })
    .save()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = {
  createSessionID,
};
