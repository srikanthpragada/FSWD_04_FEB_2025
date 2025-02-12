let names = ["JavaScript", "Java", "Python", "Ruby", "C" ]

function longName(name) {
    return  name.length <= 4 
}


console.log(names.filter(longName))