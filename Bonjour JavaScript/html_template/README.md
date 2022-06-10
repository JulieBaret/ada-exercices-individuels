**Énoncé**
Étape 1: L’heure des présentations 🤝
Commencer par télécharger le template.

Dans le fichier script.js, utilisez la fonction prompt() pour demander son nom à l’utilisateur.ice
Creer une variable de texte dans laquelle vous utiliserez la concaténation pour stocker la chaine de caractère “👋 Bonjour” suivi du nom saisi par l’utilisateur.ice.
Ajouter un element h2 dans le corps de la page HTML qui entoure la chaine de caractères stockée.
Pour ajouter un élément au contenu de la page HTML, dans cet exercice, nous utiliserons le procédé suivant: document.body.innerHTML += "<h1> Coucou! </h1>’ notez l’usage de l’opérateur “+=” qui implique une addition au contenu existant dans la variable, ici document.body.innerHTML, qui correspond à notre page HTML.

Étape 2: Faisons connaissance 😇
À la suite de ce qui a été écrit dans l’étape 1, réutiliser le même procédé pour demander l’année de naissance de l’utilisateur.ice.
Créer une variable qui contient l’age de l’utilisateur.ice, calculé à partir de son année de naissance et de l’année en cours.
Sur la page HTML, ajouter un element h3 qui affiche “Vous avez ” suivi de l’age calculé précédemment suivi de “ans” (exemple: “Vous avez 32 ans”) toujours en employant les mêmes solutions employés en étape 1.
Étape 3: Et un peu de ménage 🧹
À ce stade, le fichier JavaScript commence à contenir un petit paquet de lignes de code!

Organiser ce fichier, en découpant le code en fonction.

Une première fonction que nous appellerons askName() qui contiendra le code de l’étape 1.
Une seconde, askBirthYear() pour le code de l’étape 2
Ces des fonctions, une fois définies, seront donc appelé, en bas de page.

C’est mieux ainsi, vous ne trouvez pas ?

Étape bonus: Soyons précis, voulez-vous ? 🧐
Pour plus de précisions sur l’age de notre utilisateur.ice, demandez-lui également son mois de naissance et prenez-le en compte dans le calcul.

**Mes sources**
https://stackoverflow.com/questions/6002254/get-the-current-year-in-javascript

https://stackoverflow.com/questions/13322485/how-to-get-the-primary-ip-address-of-the-local-machine-on-linux-and-os-x

https://www.devfaq.fr/question/comment-utiliser-la-variable-javascript-dans-innerhtml-dune-balise-html-cr-eacute-er-un-eacute-l-eacute-ment-de-liste-avec-un-nom-de-variable