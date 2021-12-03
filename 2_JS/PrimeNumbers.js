var numbers = [],
    length = 5,
    display = "";

for (var x = 0; x < length; x++)
    numbers.push(Math.floor(Math.random() * (100)));

for (var x = 0; x < length; x++)
    display += numbers[x] + " ";

n(1);
console.log("Random Numbers to be Tested if Prime or Not: { " + display + "}");
n(1);

for (var x = 0; x < length; x++) {
    var verifier = Prime(numbers[x]);
    if ((verifier) == true) {
        console.log(numbers[x] + " is a prime number.")
    } else {
        console.log(numbers[x] + " is not a prime number.")
    }
}

n(1);

function Prime(n) {
    var counter, isPrime = true;
    if (n == 1)
        isPrime = false;
    else if (n > 1) {
        for (counter = 2; counter < n; counter++) {
            if (n % counter == 0) {
                isPrime = false;
                break;
            }
        }
    } else
        isPrime = false;
    return isPrime;
}

function n(y) {
    for (var x = 0; x < y; x++)
        console.log("\n");
}