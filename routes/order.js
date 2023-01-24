const express = require("express");
const {
  createOrder,
  getOneOrder,
  getLoggedInOrders,
} = require("../controllers/orderController");
const { isLoggedIn, customRole } = require("../middlewares/user");
const router = express.Router();

router.route("/order/create").post(isLoggedIn, createOrder);
router.route("/myorder").post(isLoggedIn, getLoggedInOrders);

module.exports = router;
