//etape 1 : variable givenNumber + fonction askNumber qui stocke la reponse au prompt
let givenNumber;
function askNumber(){
    givenNumber = parseInt(prompt("Saisissez un chiffre"));
    console.log(givenNumber);
    return givenNumber;

}

// etape 2 : fonction didIWin qui répond en alert selon le givenNumber + fonction gamePlay qui appelle
//function didIWin(givenNumber){
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
// function gamePlay(){
//     askNumber();
//     didIWin(givenNumber);
// }
//gamePlay();

//etape 3 : didIwin return true ou false
function didIWin(givenNumber){

    if(givenNumber == 22){
        console.log("True");
        return true;
    } else {
        console.log("False");
        return false;
    }
}

//etape 3 : while tant que givenNumber n'est pas 22 ; version longue
//function gamePlay(){
    //     let victory;
//     do{
//         let numberByUser = askNumber();
//         victory = didIWin(numberByUser);
//             if(victory == true){
//                 alert("Congratulations!");
//             }
//             else{
//                 alert("Try again...");
//             }
//     } while(victory == false);
// }

//etape 3 : version courte
function gamePlay(){
do{
        askNumber();
        didIWin(givenNumber);
            if(didIWin(givenNumber)){
                alert("Congratulations!");
            }
            else{
                alert("Try again...");
            }
    } while(didIWin(givenNumber) == false);
}

//gamePlay();


//etape 4 : BOUCLE INFINIE...


function didIReallyWin(a,b){

    if(a == b){
        return true;
    } else {
        return false;
    }
}


function playerOne() {

let givenNumberOne;
let tentatives = 0;

do{ 
    givenNumberOne = prompt("Joueur 1, saisissez un chiffre entre 0 et 50 :");
        if (givenNumberOne < 0 || givenNumberOne > 50){
        tentatives+=1
        playerOne();
        };
    didIReallyWin(givenNumberOne, 22);
        if(didIReallyWin(givenNumberOne, 22)){
            alert("Bravo ! Tu as deviné le nombre !");
        } else {
            alert("Essaie encore...")
            tentatives+=1;
        }
} while(didIReallyWin(givenNumberOne, 22) == false);
}


playerOne();