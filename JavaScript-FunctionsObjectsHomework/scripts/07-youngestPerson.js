function findYoungestPerson(persons){
    var minAge = Number.MAX_VALUE;
    var youngestPerson;
    for(var i = 0; i < persons.length; i+=1){
        var personAge = persons[i].age;
        if(personAge < minAge){
            minAge = personAge;
            youngestPerson = persons[i];
        }
    }
    if(youngestPerson){
        console.log('The youngest person is ' + youngestPerson.firstname +' '+ youngestPerson.lastname);
     }else{
        console.log('Age property is missing');
    }
}
var persons = [
    { firstname : 'George', lastname: 'Kolev', age: 32},
    { firstname : 'Bay', lastname: 'Ivan', age: 81},
    { firstname : 'Baba', lastname: 'Ginka', age: 40}];
findYoungestPerson(persons);

/*
function findYoungestPerson(persons) {
    persons.sort(function(firstPerson, secondPerson){
        return firstPerson.age - secondPerson.age;
    });

    console.log('The youngest person is %s %s',persons[0].firstname, persons[0].lastname);
}

findYoungestPerson(
    [
        { firstname : 'George', lastname: 'Kolev', age: 32},
        { firstname : 'Bay', lastname: 'Ivan', age: 81},
        { firstname : 'Baba', lastname: 'Ginka', age: 40}
    ]
);*/
