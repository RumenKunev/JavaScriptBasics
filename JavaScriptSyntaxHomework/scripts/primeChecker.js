function isPrime(number){
    var isPrime = true;
    var devider = Math.sqrt(number);
    for(var i = 2; i <= devider; i++){
        if(number % i == 0){
            isPrime = false;
            break;
        }
    }
    return isPrime;
}
console.log(isPrime(7));
console.log(isPrime(254));
console.log(isPrime(587));