"use strict";
function printFirstNames(friends) {
    for (let friend of friends) {
        console.log(friend.firstName);
    }
}
printFirstNames([{ firstName: "Mert" }, { firstName: "Henry" }, { firstName: "ClapTrap" }]);
//declaring variables explicit
let isVisible = true;
let hidden = false;
let trigger = false;
let no8 = 8;
//declaring variables implizit
let gamename;
let releasetext;
let games;
//releasetext = `${gamename} will be released on Febuary the 19th of 2019`;
if (trigger = isVisible) {
    isVisible = false;
}
if (isVisible != true) {
    hidden = true;
}
console.log(trigger, isVisible);
//console.log(releasetext);
// for of loop in list
games = ["Metro Redux", "Super Smash Bros", "Destiny"];
for (let game of games) {
    console.log(game);
}
//for in loop in list 
for (let index in games) {
    console.log(`${index}- ${games[index]}`);
}
function onKeyUp() {
    //grab the input element and its value
    let input = document.getElementById("myInput");
    let gamename = input.value;
    let output = document.getElementById("myOutput");
    output.innerHTML = `Your Game Name "${gamename}",
is ${gamename.trim().length} characters long!`;
}
//For ... in Loop in Objects
let gamerelease = [{ gameName: "Metro Redux", releaseDate: '2019-02-19' }];
for (let gamerel in gamerelease[0]) {
    console.log(gamerel, gamerelease[0][gamerel]);
}
//tuples 
let genre = ["Shooter", true];
genre[1] = false;
for (let gen of genre) {
    console.log(gen);
}
//Enums
//left = 0, top =1 , right =2, bottom = 3
var Dock;
(function (Dock) {
    Dock[Dock["left"] = 0] = "left";
    Dock[Dock["top"] = 1] = "top";
    Dock[Dock["right"] = 2] = "right";
    Dock[Dock["bottom"] = 3] = "bottom";
})(Dock || (Dock = {}));
//set another start number
var Direction;
(function (Direction) {
    Direction[Direction["left"] = 1] = "left";
    Direction[Direction["top"] = 2] = "top";
    Direction[Direction["right"] = 3] = "right";
    Direction[Direction["bottom"] = 4] = "bottom";
})(Direction || (Direction = {}));
//set numbers explicit
var explicit;
(function (explicit) {
    explicit[explicit["left"] = 4] = "left";
    explicit[explicit["top"] = 5] = "top";
    explicit[explicit["right"] = 6] = "right";
    explicit[explicit["bottom"] = 7] = "bottom";
})(explicit || (explicit = {}));
//access Enum valies 
Dock.top;
let dock = Dock.left;
console.log(dock);
//access enum name
let valName = Dock[1];
// or
let valName2 = Dock[Dock.bottom];
console.log(valName, valName2);
//get value from the name
let num = Dock["top"];
let dok = Dock["top"];
console.log(num, dok);
//# sourceMappingURL=main.js.map