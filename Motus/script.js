function tryWord(word, base) {
    // TODO: fix jeu sensible à la casse.
    if (word === base) {
        return true
    } else {
        let wellPlaced = [];
        let notInWord = [];
        let missPlaced = [];

        let arrayBase = base.split('');
        let arrayWord = word.split('');

        for (let i in arrayBase) {
            if (arrayBase[i] === arrayWord[i]) {
                wellPlaced.push(arrayWord[i]);
            }
        }

        for (let char of arrayWord) {
            if(arrayBase.includes(char)){
                missPlaced.push(char)
            } else {
                notInWord.push(char)
            }
        }

        for(let j in missPlaced){
            if(missPlaced[j] === wellPlaced[j]){
                delete missPlaced[j];
            }
        }

        return { wellPlaced: wellPlaced, missPlaced: missPlaced, notInWord: notInWord }
    }
}

function guess() {
    let base = 'dictionnaire'
    let word = document.getElementById("word").value
    let result = tryWord(word, base)
    document.getElementById("word").value = ''
    document.getElementById("try").innerText = word
    if(result == true){
        document.getElementById("win").innerText = 'Vous avez gagné'
    } else {
        document.getElementById("well").innerText = 'Bien placé: ' + result.wellPlaced.join(', ')
        document.getElementById("miss").innerText = 'Mal placé: ' + result.missPlaced.join(', ')
        document.getElementById("not").innerText = 'Pas dans le mot: ' + result.notInWord.join(', ')
    }
}
