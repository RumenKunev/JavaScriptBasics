function reverseString(str){
    var arr = str.split('');
    arr.reverse();
    var reversedStr = arr.join('');
    return reversedStr;
}
console.log(reverseString('sample'));
console.log(reverseString('softUni'));
console.log(reverseString('java script'));


/*
function reverseString(inputString) {
    var i;
    var reversedString = "";
    for (i = inputString.length - 1; i >= 0; i -= 1) {
        reversedString += inputString[i];
    }
    console.log(reversedString);
}
reverseString('sample');
reverseString('softUni');
reverseString('java script');*/
