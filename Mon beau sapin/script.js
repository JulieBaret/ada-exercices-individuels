//Etape 1 : 

// function sapin(n){
//     let espace = " ";
//     const etoile = "x";
//     const couronne = "/*\\";
//     let brancheIncr = "*";
//     let brancheGauche = "/**";
//     let brancheDroite = "\\";

//     console.log(espace + espace + etoile);
//     console.log(espace + couronne );
//     console.log(brancheGauche + brancheIncr + brancheDroite);

// }

// sapin(1);

function createStar(n){
    let star = "";
    let i = 0;
    while (i < n){
        star += "*";
        i++;
    }
    return star;
}

function createSpace(n){
    let space = "";
    let i = n;

    while(i > 0){
        space += ".";
        // console.log(i);
        i--;
        
    }
    return space;
}

function sapin(end){
    let etoile = "+";
    for (let i = 0; i < end+1; i++){
        let spaceFloor = createSpace(end-i);
        if (i == 0){
            console.log(spaceFloor,etoile);
        } else {
            let floor = '/' + createStar((2*i)-1) + '\\';
            console.log(spaceFloor, floor);
        }
    }
}

sapin(8)