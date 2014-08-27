function findMaxSequence(arr){
    var result = [];
    var counter = 1;
    var maxCounter = 1;
    var index;
    var arrLength = arr.length;
    var i;

    if(arrLength == 1){
        return arr;
    } else {
        for (i = 0; i <= arrLength - 1; i += 1) {
            if(arr[i + 1] === arr[i]){
                counter += 1;

                if(counter > maxCounter) {
                    maxCounter = counter;
                    index = i;
                }
            } else {
              counter = 1;
            }
        }
    }
    for(i = 0; i < maxCounter; i += 1){
        result.push(arr[index]);
    }
    return result;
}
console.log(findMaxSequence([2, 2, 1, 1, 2, 3, 3, 3, 3, 1, 2, 2, 2]));
console.log(findMaxSequence(['happy']));
console.log(findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']));
