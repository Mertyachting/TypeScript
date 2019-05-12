interface Friend{
    firstName: string;
}
function printFirstNames(friends:Friend[]){
    for (let friend of friends){
        console.log(friend.firstName);
    }
}
printFirstNames([{firstName:"Mert"},{firstName:"Henry"},{firstName:"ClapTrap"}]);
//declaring variables explicit
let isVisible: boolean = true;
let hidden: boolean = false;
let trigger: boolean = false; 
let no8: number = 8;
//declaring variables implizit
let gamename: string;
let releasetext: string;


let games: string[];

//releasetext = `${gamename} will be released on Febuary the 19th of 2019`;

if (trigger = isVisible){
    isVisible = false;
}
if(isVisible != true){
    hidden = true;
}

console.log(trigger, isVisible);
//console.log(releasetext);

// for of loop in list
games = ["Metro Redux", "Super Smash Bros", "Destiny"];
for (let game of games){
    console.log(game);
}
//for in loop in list 
for (let index in games){
    console.log(`${index}- ${games[index]}`);
}


function onKeyUp() {
    //grab the input element and its value
    let input = document.getElementById("myInput") as HTMLInputElement;
    let gamename=input.value;

    let output = document.getElementById("myOutput") as HTMLOutputElement;
    output.innerHTML = `Your Game Name "${gamename}",
is ${gamename.trim().length} characters long!`;
}


interface GameRelease{
    gameName: string;
    releaseDate: Date;
}
//For ... in Loop in Objects
let gamerelease = [{gameName:"Metro Redux", releaseDate: '2019-02-19'}]
for (let gamerel in gamerelease[0]){
    console.log(gamerel, gamerelease[0][gamerel])
}

//tuples 
let genre : [string,boolean] = ["Shooter",true];
genre[1] = false;

for(let gen of genre){
    console.log(gen)
}

//Enums

//left = 0, top =1 , right =2, bottom = 3
enum Dock {left,top,right,bottom}

//set another start number
enum Direction {left=1, top,right,bottom}

//set numbers explicit
enum explicit{left=4, top = 5, right=6, bottom=7}

//access Enum valies 
Dock.top
let dock: Dock = Dock.left;
console.log(dock)

//access enum name
let valName: string = Dock[1]
// or
let valName2: string = Dock[Dock.bottom];
console.log(valName, valName2)
//get value from the name
let num: number = Dock["top"];
let dok: Dock = Dock["top"];
console.log(num, dok)
