function lastDigitAsText(number) {

    var lastDigit = Math.abs(number % 10);
    switch (lastDigit) {
        case 1:
            return "One";
        case 2:
            return "Two";
        case 3:
            return "Three";
        case 4:
            return "Four";
        case 5:
            return "Five";
        case 6:
            return "Six";
        case 7:
            return "Seven";
        case 8:
            return "Eight";
        case 9:
            return "Nine";
        case 0:
            return "Zero";
        default:
            break;
    }

}
console.log(lastDigitAsText(6));
console.log(lastDigitAsText(-55));
console.log(lastDigitAsText(133));
console.log(lastDigitAsText(14567));

/*
function lastDigitAsText(input) {

    function convertDigitToWord(digit) {
        var digitAsWord;

        switch (digit) {
            case 0:
                digitAsWord = 'Zero';
                break;
            case 1:
                digitAsWord = 'One';
                break;
            case 2:
                digitAsWord = 'Two';
                break;
            case 3:
                digitAsWord = 'Three';
                break;
            case 4:
                digitAsWord = 'Four';
                break;
            case 5:
                digitAsWord = 'Five';
                break;
            case 6:
                digitAsWord = 'Six';
                break;
            case 7:
                digitAsWord = 'Seven';
                break;
            case 8:
                digitAsWord = 'Eight';
                break;
            case 9:
                digitAsWord = 'Nine';
                break;
            default :
                digitAsWord = 'Not a digit'

        }

        return digitAsWord;
    }

    var numberAsString = '' + input[0],
        lastDigit = numberAsString[numberAsString.length - 1],
        lastDigitAdWord = convertDigitToWord(Number(lastDigit));

    console.log(lastDigitAdWord);
}

lastDigitAsText([6]);
lastDigitAsText([-55]);
lastDigitAsText([133]);
lastDigitAsText([14567]);*/
