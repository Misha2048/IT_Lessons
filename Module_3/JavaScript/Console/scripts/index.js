let x = 3;
let y = 5;
console.log("x: ", x, ", y: ", y, ", x*y:", x * y);

let sum = x + y;
let difference = x - y;
let quotient = x / y;
console.log(sum, difference, quotient);

let remainder = y % x;
console.log("y % x: ", remainder);

x = x + 10;
console.log("x: ", x);
x += 10;
console.log("x: ", x);
x++;
console.log("x: ", x);

x = 1; y = 2;
let z = x + 2 * y;
console.log("z: ", z);

z = (x + 2) * y;
console.log("z: ", z);

let name = "Richard";
let lastname = "Stallman";
let fullname = name + " " + lastname;
console.log(fullname);
console.log(fullname + 42);

console.log("2" + x + y);
console.log(x + "2" + y);
console.log(x + y + "2");