function checkBrackets(expression) {
    var bracketsCount = 0;
    var i;
    var arrLength = expression.length;

    for (i = 0; i < arrLength; i += 1) {
        if (expression[i] == '(') {
            bracketsCount++;
        } else if (expression[i] == ')') {
            bracketsCount--;
        }
    }

        if (bracketsCount == 0) {
            return 'correct';
        } else {
            return 'incorrect';
        }

}
console.log(checkBrackets('( ( a + b ) / 5 – d )'));
console.log(checkBrackets(') ( a + b ) )'));
console.log(checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )'));
