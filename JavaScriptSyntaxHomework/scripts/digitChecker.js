function checkDigit(number){
    var thirdDigit = Math.floor(number/100)%10;
    var equalsTree = (thirdDigit == 3);
    return equalsTree;
}
console.log(checkDigit(1235));
console.log(checkDigit(25368));
console.log(checkDigit(123456));