function findMaxSequence(arr){
    var currentCounter = 1;
    var maxCounter = 1;
    var index;
    var bestIndex;
    var i;
    var arrLength = arr.length;

        for (i = 0; i < arrLength - 1; i += 1) {
            if (arr[i + 1] > arr[i]) {
                currentCounter += 1;
                index = i;
                if (currentCounter > maxCounter) {
                    maxCounter = currentCounter;
                    bestIndex = index + 1 - maxCounter + 1;
                }
            } else {
                currentCounter = 1;
            }
        }
        if(maxCounter == 1){
            return 'no';
        }
        var resultStr = arr.slice(bestIndex, bestIndex + maxCounter);
        return resultStr;
}
console.log(findMaxSequence([3, 2, 3, 4, 2, 2, 4]));
console.log(findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]));
console.log(findMaxSequence([3, 2, 1]));
