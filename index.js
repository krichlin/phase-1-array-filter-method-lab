// Code your solution here

function findMatching(names_Array, name) {
    return names_Array.filter( 
        (isMatching) => isMatching.toLowerCase() === name.toLowerCase()
    );
}

function fuzzyMatch(names_Array, name) {
    return names_Array.filter(
        (isMatching) => isMatching.toLowerCase().indexOf(name.toLowerCase()) === 0
    );
}

function matchName(names_Array, name) {
    return names_Array.filter(
        (record) => record.name == name

    );
}