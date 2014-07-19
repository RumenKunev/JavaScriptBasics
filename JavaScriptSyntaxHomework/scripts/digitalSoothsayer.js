var result = [];

function soothsayer(arr){

    var length = arr.length;
    for(var i = 0; i < length; i++) {
        var sourceArr = arr[i];
        var randomNum = Math.floor((Math.random() * 4) + 1);
        result.push(sourceArr[randomNum]);
    }
    return result;
}

soothsayer([[3, 5, 2, 7, 9], ['Java', 'Python', 'C#', 'JavaScript', 'Ruby'], ['Silicon Valley', 'London', 'Las Vegas',
'Paris', 'Sofia'], ['BMW', 'Audi', 'Lada', 'Skoda', 'Opel']]);

console.log("You will work " + result[0] + ' years on ' + result[1] + '. You will live in ' +
 result[2] + ' and drive ' + result[3] + '.');