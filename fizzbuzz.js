// Write a program that logs the numbers from 1 to 100.
// For multiples of three log "Fizz" instead of the number.
// For multiples of five log "Buzz" instead of the number.
// For numbers which are multiples of both three and five log "FizzBuzz" instead of the number.

var n = 1;

while (n <= 100) {
	if (n % 3 === 0 && n % 5 === 0) {
		console.log('FizzBuzz');
	} else if (n % 3 === 0) {
		console.log('Fizz');
	} else if (n % 5 === 0) {
		console.log('Buzz');
	} else {
		console.log(n);
	}
	n++;
}