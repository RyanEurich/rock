function getComputerChoice(){
    const items = ["rock","paper","scisors"];
    return items[Math.floor(Math.random()*items.length)];
}

let result = getComputerChoice();
console.log(result)