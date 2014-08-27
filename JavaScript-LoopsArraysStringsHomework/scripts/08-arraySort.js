function sortArray(arr){
    var sortedArray = [];
    while (arr.length != 0) {
        var nextNumber = Math.min.apply(null, arr);
        sortedArray.push(nextNumber);
        var numberIndex = arr.indexOf(nextNumber);
        arr.splice(numberIndex, 1);
    }
    return sortedArray;
}
console.log(sortArray([5, 4, 3, 2, 1]));
console.log(sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]));