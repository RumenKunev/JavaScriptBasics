function reverseWordsInString(str) {
    var result = '';
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
        result += words[i].split('').reverse().join('') + ' ';
    }
    return result.trim();
}
console.log(reverseWordsInString("Hello, how are you."));
console.log(reverseWordsInString("Life is pretty good isn’t it?"));

/*function reverseWordsInString(str) {
    var words = str.split(' '),
        i;

    for(i in words){
        words[i] = words[i].split('').reverse().join('');
    }

    var resultString = words.join(' ');

    console.log(resultString);
}


reverseWordsInString('Hello, how are you.');
reverseWordsInString('Life is pretty good, isn’t it?');*/