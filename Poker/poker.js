//Étape 1

function create_deck(){
    deck = [];
    card_points = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
    card_signs = ["♠︎","♣︎","♡","♢"];
    for(let point of card_points){
        for(let sign of card_signs){
            deck.push(point+sign);
        };
    };
    return deck
};

let new_deck = create_deck();
console.log(new_deck);