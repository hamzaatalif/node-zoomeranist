const express = require("express");
const router = express.Router();

const {redirectId,getRoom} = require("../controller/room");


router.route("/").get(redirectId);
router.route("/:room").get(getRoom);



module.exports = router;