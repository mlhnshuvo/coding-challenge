const MyData = require("../Model/MyData");
const serverError = require("../utils/serverError");
const addDataValidation = require("../validations/addDataValidation,");

const addMyData = (req, res) => {
  const { name, selector, sessionid } = req.body;
  let obj = { author: sessionid, name, selector };
  const validation = addDataValidation(obj);
  if (validation.isValid) {
    new MyData(obj)
      .save()
      .then((response) => {
        res.status(200).json({
          response,
          message: "Data added successfully!",
        });
      })
      .catch(() => {
        serverError(res);
      });
  } else {
    res.status(400).json(validation.error);
  }
};

const getMyData = (req, res) => {
  const { sessionid } = req.params;
  MyData.find({ author: sessionid })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const deleteMyData = (req, res) => {
  const { id } = req.params;
  MyData.findOneAndRemove({ _id: id })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const updateMyData = (req, res) => {
  const { dataId } = req.params;
  const { name, selector } = req.body;
  let obj = { name, selector };
  const validation = addDataValidation(obj);
  if (validation.isValid) {
    MyData.findOneAndUpdate({ _id: dataId }, obj, { new: true })
      .then((response) => {
        res.status(200).json({
          response,
          message: "Data update successfully!",
        });
      })
      .catch(() => {
        serverError(res);
      });
  } else {
    res.status(400).json(validation.error);
  }
};

module.exports = {
  addMyData,
  getMyData,
  deleteMyData,
  updateMyData,
};
