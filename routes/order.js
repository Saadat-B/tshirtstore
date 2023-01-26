const express = require("express");
const {
  createOrder,
  getOneOrder,
  getLoggedInOrders,
  admingetAllOrders,
  adminUpdateOrder,
  adminDeleteOrder,
} = require("../controllers/orderController");
const { isLoggedIn, customRole } = require("../middlewares/user");
const router = express.Router();

router.route("/order/create").post(isLoggedIn, createOrder);
router.route("/myorder").post(isLoggedIn, getLoggedInOrders);

// admin routes

router
  .route("/admin/orders")
  .get(isLoggedIn, customRole("admin"), admingetAllOrders);
router
  .route("/admin/order/:id")
  .put(isLoggedIn, customRole("admin"), adminUpdateOrder)
  .delete(isLoggedIn, customRole("admin"), adminDeleteOrder);

module.exports = router;
