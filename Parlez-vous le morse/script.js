//Etape 1 : convertir une string en tableau de caractères
function getLatinCharacterList(texte){
    return texte.split('');
}
console.log(getLatinCharacterList("hello world"));



//Etape 2 : retourne la correspondance d'un caractere en morse 
const latinToMorse = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
};

function translateLatinCharacter(caractere){
    return latinToMorse[caractere];
}
console.log(translateLatinCharacter("A"));



//Etape 3 : traduit une chaîne de caractère en morse
function encode(texteLatin){
    let charLatin = getLatinCharacterList(texteLatin);
    let texteMorse = [];
    for (let i=0; i < charLatin.length ; i++){
        let charMorse = translateLatinCharacter(charLatin[i].toUpperCase());
        texteMorse.push(charMorse);
    }
    return texteMorse.join(" / ");
}

console.log(encode("lolo"));



//Etape 4 : traduit du morse en chaîne de caractères
const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H"
};

function getMorseCharacterList(texte){
    return texte.split(' / ');
};
//convertit un mot morse en tableau de caractères
console.log(getMorseCharacterList("-- / ... / --- / ..."));

function translateMorseCharacter(caractere){
    return morseToLatin[caractere];
};
//convertit un caractère morse en caractère latin
console.log(translateMorseCharacter("..."));

function decode(texteMorse){
    let charMorse = getMorseCharacterList(texteMorse);
    let texteLatin = [];
    for (let i=0; i < charMorse.length ; i++){
        let charLatin = translateMorseCharacter(charMorse[i]);
        texteLatin.push(charLatin.toLowerCase());
    }
    return texteLatin.join('');
}

console.log(decode("... / .- / .-.. / ..- / -"));