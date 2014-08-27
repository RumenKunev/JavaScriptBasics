function createArray(number){
    var arr = new Array(number);
    for(var i = 0; i < number; i += 1){
        arr[i] = i * 5;
    }
    console.log(arr.join(', '));
}
createArray(20);
createArray(5);