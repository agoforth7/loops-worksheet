// Write a program that logs all numbers from -50 to 50.
// Odd numbers should be prefixed with "Odd: ".
// Even numbers should be prefixed with "Even: ".
// Zero should have no prefix.

var i = -50;

while (i <= 50) {
	if (i === 0) {
		console.log(i);
	} else if (i % 2 === 0) {
		console.log('Even: ' + i);
	} else {
		console.log('Odd: ' + i);
	}
	i++;
}