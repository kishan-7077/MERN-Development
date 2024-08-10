const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
	.then(() => {
		console.log("connection successful");
	})
	.catch((err) => console.log(err));

async function main() {
	await mongoose.connect("mongodb://127.0.0.1:27017/relation");
}

const orderSchema = new Schema({
	item: String,
	price: Number,
});

const customerSchema = new Schema({
	name: String,
	orders: [
		{
			type: Schema.Types.ObjectId,
			ref: "Order",
		},
	],
});

customerSchema.pre("findOneAndDelete", async () => {
	console.log("pre Middleware");
});

customerSchema.post("findOneAndDelete", async () => {
	if (Customer.orders.length) {
		Order.deleteMany({ _id: { $in: Customer.orders } });
	}
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// const addCustomer = async () => {
// 	let cust1 = new Customer({
// 		name: "Kishan Kayadra",
// 	});

// 	let order1 = await Order.findOne({ item: "Samosa" });
// 	let order2 = await Order.findOne({ item: "Frooti" });

// 	cust1.orders.push(order1);
// 	cust1.orders.push(order2);

// 	let result = await cust1.save();
// 	console.log(result);
// };

// addCustomer();

// const addOrders = async () => {
// 	let res = await Order.insertMany([
// 		{ item: "Samosa", price: 20 },
// 		{ item: "Chocolate", price: 40 },
// 		{ item: "Frooti", price: 10 },
// 	]);
// 	console.log(res);
// };

// addOrders();

const addCust = async () => {
	let newCust = new Customer({
		name: "Karan Arjun",
	});

	let newOrder = new Order({
		item: "pizza",
		price: 250,
	});

	newCust.orders.push(newOrder);

	await newOrder.save();
	await newCust.save();

	console.log("added new Customer");
};

const delCust = async () => {
	let data = await Customer.findByIdAndDelete("66b73a8946dd006eb09e8246");
	console.log(data);
};

// addCust();
delCust();
