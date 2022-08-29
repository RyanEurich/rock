function getComputerChoice(items){
    const items = ["rock","paper","scisors"];
    return items[Math.floor(Math.random()*items.length)];
}



function playRound(pSelect,cSelect){
    if (pSelect.toLowerCase()=="rock"){
        if(cSelect.toLowerCase()=="paper"){
            return "computer won"
        }
        else if(cSelect.toLowerCase()=="rock"){
            return "tie"
        }
        else if(cSelect.toLowerCase()=="scisors"){
            return "you lost"
        }
    }
    else if (pSelect.toLowerCase()=="paper"){
        if(cSelect.toLowerCase()=="paper"){
            return "tie"
        }
        else if(cSelect.toLowerCase()=="rock"){
            return "you lost"
        }
        else if (cSelect.toLowerCase()=="scisors"){
            return "you won"
        }
    }
    else if (pSelect.toLowerCase()=="scisors"){
        if(cSelect.toLowerCase()=="paper"){
            return "you lost"
        }
        else if(cSelect.toLowerCase()=="rock"){
            return "you won"
        }
        else if (cSelect.toLowerCase()=="scisors"){
            return "you tied"
        }
    }
}
function game(){
    for (let i = 0; i <5; i++){
        const pSelector = "rock";
        const compSelector = getComputerChoice(items);
        console.log(compSelector)
        console.log(playRound(pSelector,compSelector))
    }
}



function getValue(e){
    
    return this.textContent;
}

options.forEach((option) =>{
    option.addEventListener('click', function (){
        const pInput = this.textContent;
        const cInput = getComputerChoice(items);
        const result = playRound(pInput,cInput);
        const add = document.querySelector("#winner");
        add.textContent = 'player choice:'+pInput+'result:'+result+'computer input'+cInput;
    });
    
});
