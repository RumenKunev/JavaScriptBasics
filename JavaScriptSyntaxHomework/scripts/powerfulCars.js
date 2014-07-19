function convertKWtoHP(value){
    var powerInHP = value * 1.34102209;
    return powerInHP.toFixed(2);
}

console.log(convertKWtoHP(75));
console.log(convertKWtoHP(150));
console.log(convertKWtoHP(1000));