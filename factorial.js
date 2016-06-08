// Calculate the factorial of the number 13.
// These are all different ways to achieve the correct result.
// I will use this as a future reference.

// var f = 1;
// var output = 1;

// while (f <= 13) {
// 	output *= f;
// 	f++;
// }

// console.log(output);


// or


// var f = 13;
// var output = 1;

// while (f > 0) {
// 	output = output * f;
// 	f--;
// }

// console.log(output);


// or


// var f = 1;
// var output = 1;

// while (f < 13) {
// 	output = output * (f + 1);
// 	f++;
// }

// console.log(output);


// or


var f = 1;
var output = 1;

while (f < 13) {
	f++;
	output = output * f;
}

console.log(output);