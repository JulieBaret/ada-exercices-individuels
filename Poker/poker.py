import random

##Etape 1
def create_deck():
    deck = []
    card_points = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"]
    card_signs = ["♠︎","♣︎","♡","♢"]
    for point in card_points:
        for sign in card_signs:
            deck.append(f"{point}{sign}")
    random.shuffle(deck)
    ##attention random.shuffle ne retourne rien, il modifie la variable
    return deck

new_deck = create_deck()
print(new_deck)

##Etape 2
def deal(card_number, deck):
    given_cards = []
    for x in range (card_number):
        given_cards.append(deck.pop())
    return given_cards

player1 = deal(2, new_deck)
player2 = deal(2, new_deck)

print(new_deck)
print(player1, player2)

##Etape 3
def flop(deck):
    flop = []
    burn = []
    burn.extend(deal(1, deck))
    flop.extend(deal(3, deck))
    burn.extend(deal(1, deck))
    flop.extend(deal(1, deck))
    burn.extend(deal(1, deck))
    flop.extend(deal(1, deck))
    return flop, burn

cards, burned_cards = flop(new_deck)

print(cards)
print(new_deck)