//etape 1 : on a créé une variable givenNumber et une fonction askNumber qui enregistre la reponse au prompteur dans givenNumber en Int
let givenNumber;
function askNumber(){
    givenNumber = parseInt(prompt("Saisissez un chiffre"));
    console.log(givenNumber);
    return givenNumber;

}

// askNumber();
console.log(givenNumber);

// etape 2 : on a créé une fonction didIWin qui répond en alert selon le givenNumber 
function didIWin(givenNumber){
//     if(givenNumber < 22){
//         alert("Plus grand");
//         gamePlay();
//     }
//     else if(givenNumber > 22){
//         alert("Plus petit");
//         gamePlay();
//     }
//     else if(givenNumber == 22){
//         alert("Bravo ! Vous avez deviné le nombre");
//     }
//     else{
//         alert("Ceci n'est pas un nombre");
//         gamePlay();
//     }
// }
    if(givenNumber == 22){
        console.log("True");
        return true;
    } else {
        console.log("False");
        return false;
    }
}

// didIWin(givenNumber);

//etape 3 
function gamePlay(){
    let victory;
    do{
        let numberByUser = askNumber();
        victory = didIWin(numberByUser);
            if(victory == true){
                alert("Congratulations!");
            }
            else{
                alert("Try again...");
            }
        
    } while(victory == false);
}

gamePlay();