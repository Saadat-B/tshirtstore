const express = require("express");
const { createOrder } = require("../controllers/orderController");
const { isLoggedIn, customRole } = require("../middlewares/user");
const router = express.Router();

router.route("/order/create").post(isLoggedIn, createOrder);

module.exports = router;
