var maxAge = 0;
function calcSupply(age, mAge, product) {
    var result = (mAge - age) * 365 * product;
    maxAge=mAge;
    return result;
}

console.log(calcSupply(38,118,0.5) + " kg of chocolate would be enough until I am " +maxAge + " years old.");
console.log(calcSupply(20,87,2) + " kg of fruits would be enough until I am " +maxAge + " years old.");
console.log(calcSupply(16,102,1.1) + " kg of nuts would be enough until I am " +maxAge + " years old.");
