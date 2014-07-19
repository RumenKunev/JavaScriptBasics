function bitChecker(number){
    var thirdBit = (number & 8) >> 3;
    console.log(thirdBit == 1);
}
bitChecker(333);
bitChecker(425);
bitChecker(2567564754);