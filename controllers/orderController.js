const Order = require("../models/order");
const Product = require("../models/product");
custom;
const BigPromise = require("../middlewares/bigPromise");

exports.createOrder = BigPromise(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    taxAmount,
    shippingAmount,
    totalAmount,
  } = req.body;
  const order = await Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    taxAmount,
    shippingAmount,
    totalAmount,
    user: req.user._id,
  });

  res.status(200).json({
    success: true,
    order,
  });
});

exports.getOneOrder = BigPromise(async (req, res, next) => {
  const order = Order.findById(req.params.id).populate("user", "name email");

  if (!order) {
    return next(new CustomerError("please check order id", 401));
  }

  res.status(200).json({
    success: true,
    order,
  });
});

exports.getLoggedInOrders = BigPromise(async (req, res, next) => {
  const order = Order.findById({ user: req.user._id });

  if (!order) {
    return next(new CustomerError("please check order id", 401));
  }

  res.status(200).json({
    success: true,
    order,
  });
});

//admin routes

exports.admingetAllOrders = BigPromise(async (req, res, next) => {
  const order = Order.findById();

  res.status(200).json({
    success: true,
    orders,
  });
});
