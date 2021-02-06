// function getTotalCost(products) {
// 	let result = 0;
// 	for (let product of products) {
// 		result += product.price;
// 	}

// 	return result;
// }

// function sum(x, y, z) {
// 	return x + y + z;
// }

// function sayHello(name) {
// 	console.log("Hello " + name, "!");
// }

// function printSomeNumber() {
// 	console.log(42);
// }

// let storeProducts = [
//   { name: "Samsung J5 2017", price: 5400},
//   { name: "iPhone X", price: 25000},
//   { name: "Xiaomi Mi 4", price: 4999},
//   { name: "Чохол для iPhone X", price: 500}
// ];

// let totalCost = getTotalCost(storeProducts);
// console.log("На складі товарів на ", totalCost, "грн.");

// let orderProducts = [
//   { name: "iPhone X", price: 25000},
//   { name: "Чохол для iPhone X", price: 500}
// ];

// totalCost = getTotalCost(orderProducts);
// console.log("Сума замовлення: ", totalCost, "грн.");

// console.log(10 + sum(2, 3, 4) + sum(1, 1, 1));

// sayHello("Linus");

// printSomeNumber();

let person = {
	'name' : '',
	'lastname' : '',
	'sayHello' : function (otherName) {
		console.log("Hello " + otherName + "! My name is " + this.name)
	},
	'getFullName' : function () {
		return this.name + " " + this.lastname;
	}

};

person.name = "Richard";
person.lastname = "Stallman";
person.sayHello("Linus");

console.log(person.getFullName())