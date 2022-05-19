let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

for (let i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]); //[i] is for index into the array
}

/*

simplified for loop:

for (let tempSport of sportsOne) {
    console.log(tempSport);
}

*/

// conditionals:

let sportsTwo: string[] = ["Basketball", "Football", "Tennis", "Soccer"];

sportsTwo.push("Baseball");
sportsTwo.push("Hockey");

for (let tempSport of sportsTwo) {
    if (tempSport == "Basketball") {
        console.log(tempSport + " -- My Favorite!");
    }
    else {
        console.log(tempSport);
    }
}