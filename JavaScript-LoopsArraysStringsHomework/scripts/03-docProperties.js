function displayProperties(obj){
    var strProperties = [];
    strProperties.concat(Object.keys(obj));
    strProperties.sort();
    console.log(strProperties.join('\n'));
}
displayProperties(document);