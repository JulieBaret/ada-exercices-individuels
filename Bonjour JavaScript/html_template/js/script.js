// let userName = prompt("Quel est ton nom ?")
// let welcome = "Bonjour " + userName

let welcomeUser = "\ud83d\udc4b Bonjour " + prompt("Quel est ton nom ?");
document.body.innerHTML += `<h2>${welcomeUser}</h2>`;

let ageUser = new Date().getFullYear() - parseInt(prompt("En quelle année es-tu née ?"));
let welcomeAgeUser = `Vous avez ${ageUser} ans.`;
document.body.innerHTML += `<h3>${welcomeAgeUser}</h3>`;