function compareChars(firstArr, secondArr){
    var output = 'Equal';
    if(firstArr.length != secondArr.length){
        output = 'Not Equal';
    } else {
        var arrLength = firstArr.length;
        var i;
        for(i = 0; i < arrLength; i += 1){
            if(firstArr[i] !== secondArr[i]){
                output = 'Not Equal';
                break;
            }
        }
    }
    return output
}
console.log(compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'], ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']));
console.log(compareChars(['3', '5', 'g', 'd'], ['5', '3', 'g', 'd']));
console.log(compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'], ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']));
