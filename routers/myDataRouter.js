const router = require("express").Router();
const {
  addMyData,
  getMyData,
  deleteMyData,
  updateMyData,
} = require("../controllers/myDataController");

router.post("/addmydata", addMyData);
router.get("/getmydata/:sessionid", getMyData);
router.delete("/deletemydata/:id", deleteMyData);
router.put("/updatemydata/:dataId", updateMyData);

module.exports = router;
