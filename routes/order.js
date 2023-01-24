const express = require("express");
const {
  createOrder,
  getOneOrder,
  getLoggedInOrders,
  admingetAllOrders,
} = require("../controllers/orderController");
const { isLoggedIn, customRole } = require("../middlewares/user");
const router = express.Router();

router.route("/order/create").post(isLoggedIn, createOrder);
router.route("/myorder").post(isLoggedIn, getLoggedInOrders);

// admin routes

router
  .route("/admin/orders")
  .post(isLoggedIn, customRole("admin"), admingetAllOrders);

module.exports = router;
