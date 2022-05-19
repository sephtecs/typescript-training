var sportsOne = ["Golf", "Cricket", "Tennis", "Swimming"];
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]); //[i] is for index into the array
}
/*

simplified for loop:

for (let tempSport of sportsOne) {
    console.log(tempSport);
}

*/
// conditionals:
var sportsTwo = ["Basketball", "Football", "Tennis", "Soccer"];
sportsTwo.push("Baseball");
sportsTwo.push("Hockey");
for (var _i = 0, sportsTwo_1 = sportsTwo; _i < sportsTwo_1.length; _i++) {
    var tempSport = sportsTwo_1[_i];
    if (tempSport == "Basketball") {
        console.log(tempSport + " -- My Favorite!");
    }
    else {
        console.log(tempSport);
    }
}
