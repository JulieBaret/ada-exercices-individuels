// Etape 1 : en deux variables
// let userName = prompt("Quel est ton nom ?")
// let welcome = "Bonjour " + userName

// Etape 1 : en une seule variable
// let welcomeUser = "\ud83d\udc4b Bonjour " + prompt("Quel est ton nom ?");
// document.body.innerHTML += `<h2>${welcomeUser}</h2>`;

function askName() {
    let welcomeUser = "\ud83d\udc4b Bonjour " + prompt("Quel est ton nom ?");
    return document.body.innerHTML += `<h2>${welcomeUser}</h2>`;
};

// Etape 2
// let ageUser = new Date().getFullYear() - parseInt(prompt("En quelle année es-tu née ?"));
// let welcomeAgeUser = `Vous avez ${ageUser} ans.`;
// document.body.innerHTML += `<h3>${welcomeAgeUser}</h3>`;

// function askBirthYear() {
//     let ageUser = new Date().getFullYear() - parseInt(prompt("En quelle année es-tu née ?"));
//     let welcomeAgeUser = `Vous avez ${ageUser} ans.`;
//     return document.body.innerHTML += `<h3>${welcomeAgeUser}</h3>`;
// };

// Etape Bonus
function askBirthYear() {
    let ageYearUser = new Date().getFullYear() - parseInt(prompt("En quelle année es-tu né.e ?"));
    let ageMonthUser = new Date().getMonth() - parseInt(prompt("En quel mois es-tu né.e ?"));
    let ageUser;
    if (new Date().getMonth() - ageMonthUser >= 0) {
        ageUser = ageYearUser
    }
    else {
        ageUser = ageYearUser - 1
    };
    let welcomeAgeUser = `Vous avez ${ageUser} ans.`;
    return document.body.innerHTML += `<h3>${welcomeAgeUser}</h3>`;
};

console.log(new Date().getMonth());
console.log(new Date().getFullYear());
askName ();
askBirthYear ();