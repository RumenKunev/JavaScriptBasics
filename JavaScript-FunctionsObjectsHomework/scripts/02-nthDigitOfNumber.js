function findNthDigit(arr) {
    var num = arr[1].toString().replace('.','').replace('-','');
    if (num.length < arr[0]) {
        return "The number doesn't have " + arr[0] + " digits";
    }
    var digit = num[num.length - arr[0]];
    return digit;
}
console.log(findNthDigit([1, 6]));
console.log(findNthDigit([2, -55]));
console.log(findNthDigit([6, 923456]));
console.log(findNthDigit([3, 1451.78]));
console.log(findNthDigit([6, 888.88]));

/* possible option to remove floating points;

function removeFloatingPoint(number) {
    var cleanNumber = '';

    for (var i = 0; i < number.length; i += 1) {

        if (number[i] === '.' || number[i] === ',') {
            continue;
        }
        cleanNumber += number[i];
    }
    return cleanNumber;
}*/


/*
function findNthDigit(arr) {
    var digitPosition =  arr[0],

        numberAsString = ('' + arr[1]).replace(/[.-]+/g, ''),

        len = numberAsString.length,

        result = "The number doesn't have 6 digits";

    if(digitPosition <= len){
        result = numberAsString[len - digitPosition];
    };


    console.log(result);
}

findNthDigit([1, 6]);
findNthDigit([2, -55]);
findNthDigit([6, 923456]);
findNthDigit([3, 1451.78]);
findNthDigit([6, 888.88]);*/
