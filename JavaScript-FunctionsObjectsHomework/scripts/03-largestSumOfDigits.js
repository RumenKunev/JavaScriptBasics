function findLargestSumOfDigits() {
    var i;
    if (arguments.length === 0) {
        return undefined;
    }
    for (i in arguments) {
        if (typeof arguments[i] !== 'number' || (arguments[i] % 1) !== 0) {
            return undefined;
        }
    }

    var sum = 0;
    var bestSum = 0;
    var biggestNumber;
    for (i = 0; i < arguments.length; i += 1) {

        var number = Math.abs(arguments[i]);
        while (number != 0) {
            var digit = number % 10;
            sum += digit;
            number = Math.floor(number / 10);
        }
        if (sum > bestSum) {
            bestSum = sum;
            biggestNumber = arguments[i];
            sum = 0;
        }
    }
    return biggestNumber;
}
console.log(findLargestSumOfDigits(5, 10, 15, 111));
console.log(findLargestSumOfDigits(33, 44, -99, 0, 20));
console.log(findLargestSumOfDigits('hello'));
console.log(findLargestSumOfDigits(5, 3.3));