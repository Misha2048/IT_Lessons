// let data = [7, 42, 3, 15, 1];
// console.log(data);

// let value = data[4];
// console.log(value);

// data[0] = 9;
// console.log(data);

// console.log(data.length);

// data.push(99);
// console.log(data, data.length);

// value = data.pop();
// console.log(value, data, data.length);

// let data = [7, 42, 3, 15, 1];

// let sum = 0;
// for (let i = 0; i < data.length; i++) {
// 	if (data[i] < 10) {
// 		sum += data[i];
// 	}
// } 

// console.log("sum: ", sum);

let names = [
	"Samsung J5 2017",
	"Samsung J6",
	"iPhone X",
	"Xiaomi Mi 4",
	"Nokia 3310 2018",
	"iPhone 7"
];

let prices = [5400, 6000, 25000, 4000, 1999, 9999];
let minPrice = 2000;
let maxPrice = 10000;

let result = [];
for (let i = 0; i <= names.length; i++) {
	if (prices[i] >= minPrice && prices[i] <= maxPrice)
		result.push(names[i]);
}

console.log(result);