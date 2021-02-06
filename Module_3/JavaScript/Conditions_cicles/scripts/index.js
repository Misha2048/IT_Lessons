let N = 3;
let s = 0;

for (var i = 1; i <= N; i++) {
	s += i;
}

console.log("s: ", s);


s = 0;
i = 1;
while (i <= N) {
	s += i;
	i++;
}

console.log("s #2: ", s);


let value = 7;
let test = false;

if (value > 10) {
	console.log("Big number!");
}
else if (value > 5) {
	console.log("Average number!");
	let test = true;
	console.log("test(internal): ", test)
}
else {
	console.log("Small number!");
}

console.log("test(external): ", test);

if (value > 5 && value < 8)
	console.log("5 < value < 8");