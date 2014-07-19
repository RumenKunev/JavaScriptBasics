function variablesTypes(value){
    var str = 'My name: ' + value[0] + ' //type is ' + typeof (value[0]) + '\n';
    str += 'My age: ' + value[1] + ' //type is ' + typeof (value[1]) + '\n';
    str += 'I am male: ' + value[2] + ' //type is ' + typeof (value[2]) + '\n';
    str += 'My favorite foods are: ' + value[3] + ' //type is ' + typeof (value[3]);
    console.log (str);
}

variablesTypes(['Rumen', 37, true, ['cake', 'chicken', 'fries']]);