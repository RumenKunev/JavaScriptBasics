function findPalindromes(inputStr) {

    var words = inputStr.toLowerCase().split(/[\W]+/);
    var outputStr = [];

    if (words[words.length - 1] === '') {
        words.pop();
    }

    var i;

    for (i in words) {
        if (words[i].split('').reverse().join('') === words[i]) {
            outputStr.push(words[i]);
        }
    }
    return outputStr.join(', ');
}

console.log(findPalindromes('There is a man, his name was Bob.'));
