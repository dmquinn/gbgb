const express = require("express");
const router = express.Router();
const {
	addOrderItems,
	getOrderById,
	updateToPaid,
} = require("../controllers/orderController.js");
const { protect } = require("../middleware/authMiddleware.js");
const { route } = require("./userRoutes.js");

router.route("/").post(protect, addOrderItems);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateToPaid);

module.exports = router;
