function findMinMaxValue(arr){
    arr.sort(function(a, b){
        return a > b;
    });
    console.log('Min -> ' + arr.shift());
    console.log('Max -> ' + arr.pop());
}
findMinMaxValue([1, 1, 15, 20, 5, 7, 31]);
findMinMaxValue([2, 2, 2, 2, 2]);
findMinMaxValue([500, 1, -23, 0, -300, 28, 35, 12]);