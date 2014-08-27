function solve(input){
    var firstTwoRows = '<table>\n' +
        '<tr><th>Price</th><th>Trend</th></tr>';
    var lastRow = '</table>';
    console.log(firstTwoRows);
    console.log('<tr><td>' + (Math.round(input[0]*100) / 100).toFixed(2) + '</td><td><img src="fixed.png"/></td></td>');
    for (var i = 1; i < input.length; i++) {
        var price = (input[i] * 100) / 100;
        if(Math.round(input[i]*100) / 100 > Math.round(input[i-1]*100) /100){
            console.log('<tr><td>' + price.toFixed(2) + '</td><td><img src="up.png"/></td></td>');
        } else if(Math.round(input[i]*100) / 100 < Math.round(input[i-1]*100) / 100){
            console.log('<tr><td>' + price.toFixed(2) + '</td><td><img src="down.png"/></td></td>');
        } else{
            console.log('<tr><td>' + price.toFixed(2) + '</td><td><img src="fixed.png"/></td></td>');
        }
    }

    console.log(lastRow);

}

solve(['36.333', '36.5', '37.019', '35.4', '35', '35.001', '36.225']);