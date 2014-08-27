function printNumbers(n){
    var arr = [];
    for(var i = 1; i <= n; i += 1){
        if((i % 4 == 0) || (i % 5 == 0)){
            continue;
        }
        arr.push(i);
    }
    if(arr.length == 0){
        return 'no'
    } else {
        return arr.join(', ');
    }
}
console.log(printNumbers(20));
console.log(printNumbers(-5));
console.log(printNumbers(13));
