const router = require("express").Router();
const { createSessionID } = require("../controllers/userController");

router.post("/createsessionid", createSessionID);

module.exports = router;
