const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: false,
		},
		email: {
			type: String,
			required: false,
			unique: true,
		},
		password: {
			type: String,
			required: false,
		},
		isAdmin: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model("User", userSchema);

module.exports = User;
