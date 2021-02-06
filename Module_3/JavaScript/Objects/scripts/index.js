let products = [
  { name: "Samsung J5 2017", screen: 5.2, price: 5400, weight: 160 },
  { name: "iPhone X", screen: 5.8, price: 25000, weight: 170 },
  { name: "Xiaomi Mi 4", screen: 5.5, price: 4999, weight: 150 },
  { name: "Nokia 3310 2018", screen: 2.4, price: 999, weight: 60 },
  { name: "iPhone 7", screen: 4.7, price: 9999, weight: 140 }
];

let minPrice = 2000, maxPrice = 10000;

let result = [];

// for (let i = 0; i < products.length; i ++) {
// 	if (products[i].price >= minPrice && products[i].price <= maxPrice)
// 		result.push(products[i])
// }

// console.log(result)

for (let product of products) {
	if (product.price >= minPrice && product.price <= maxPrice)
		result.push(product)
}

console.log(result)