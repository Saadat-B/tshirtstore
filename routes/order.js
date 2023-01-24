const express = require("express");
const { createOrder, getOneOrder } = require("../controllers/orderController");
const { isLoggedIn, customRole } = require("../middlewares/user");
const router = express.Router();

router.route("/order/create").post(isLoggedIn, createOrder);
router.route("/order/:id").post(isLoggedIn, getOneOrder);

module.exports = router;
