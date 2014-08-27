function solve(input){
    var sum = 0;
    var biggestSum = Math.max();
    var result = '';
    var index;

    for (var i = 0; i < input.length - 3; i++) {
        var row = input[i];
        var re = />[^><]+</g;
        var splitedArr = row.match(re);

        for (var j = 1; j < splitedArr.length; j++) {
            var num = splitedArr[j].replace('<','').replace('>','');
            if(num === '-'){
                num = 0;

            }else{
                num = parseFloat(num);
                sum += num;

            }
        }

        if(sum > biggestSum){
            result = '';
            biggestSum = sum;
            result += biggestSum + ' = ';
            for(k = 1; k < splitedArr.length; k++){
                if (splitedArr[k].replace('<', '').replace('>', '') === '-'){
                    continue;
                } else {
                    if ((k !== splitedArr.length - 1) && (splitedArr[k+1].replace('<', '').replace('>', '') !== '-')) {
                        result += splitedArr[k].replace('<', '').replace('>', '') + ' + ';
                    } else {
                        result += splitedArr[k].replace('<', '').replace('>', '');
                    }
                }
            }
            sum = 0;
        }else{
            sum = 0;
        }

    }
    console.log(result);
}
solve(['<table>', '','<tr><td>Bourgas</td><td>-</td><td>-</td><td>-</td></tr>','</table>']);