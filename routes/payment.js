const express = require("express");
const {
  sendStripeKey,
  captureStripePayment,
} = require("../controllers/paymentController");
const router = express.Router();
const { isLoggedIn } = require("../middlewares/user");

router.route("/capturestripe").post(isLoggedIn, captureStripePayment);

module.exports = router;
