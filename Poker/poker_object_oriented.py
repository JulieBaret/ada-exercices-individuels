import random

class Card:

    def __init__(self, number, family):
        self.number = number
        self.family = family
        self.value = number + family

    def __str__(self):
        return f"{self.number}{self.family}"

x = Card("4", "♠︎")
print(x.family)

def create_deck():
    deck = []
    card_number = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"]
    card_family = ["♠︎","♣︎","♡","♢"]
    for number in card_number:
        for family in card_family:
            card = Card(number, family)
            deck.append(card)
    random.shuffle(deck)
    ##attention random.shuffle ne retourne rien, il modifie la variable
    return deck

deck = create_deck()

def print_deck(deck):
    my_deck = []
    for x in range (len(deck)):
        my_deck.append(deck[x].__str__())
    print(my_deck)

print_deck(deck)

def deal_deck(number):
    player = []
    for i in range(number):
        player.append(deck.pop())
    return player

player1 = deal_deck(2)
res_player1 = f"La main du premier joueur : {player1[0].value} {player1[1].value}"
player2 = deal_deck(2)
res_player2 = f"La main du second joueur : {player2[0].value} {player2[1].value}"

print(res_player1)
print(res_player2)

def flop():
    flop_cards = []
    burned = []
    burned.extend(deal_deck(1))
    flop_cards.extend(deal_deck(3))
    burned.extend(deal_deck(1))
    flop_cards.extend(deal_deck(1))
    burned.extend(deal_deck(1))
    flop_cards.extend(deal_deck(1))
    return flop_cards

fin_flop = flop()
print_deck(fin_flop)

