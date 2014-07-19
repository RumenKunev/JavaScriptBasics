function calcCircleArea(r) {
    var area = Math.PI * r * r;
    return area;
}
var firstResult = calcCircleArea(7);
var secondResult = calcCircleArea(1.5);
var thirdResult = calcCircleArea(20);

var result = document.getElementById('result');
result.innerHTML += "r = 7; area = " + firstResult + "<br>";
result.innerHTML += "r = 1.5; area = " + secondResult + "<br>";
result.innerHTML += "r = 20; area = " + thirdResult;