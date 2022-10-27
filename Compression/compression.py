#Texte de référence
text_to_compress = "généralement, on utilise un texte en faux latin ( le texte ne veut rien dire, il a été modifié ), le lorem ipsum ou lipsum, qui permet donc de faire office de texte d'attente. l'avantage de le mettre en latin est que l'opérateur sait au premier coup d'oeil que la page contenant ces lignes n'est pas valide, et surtout l'attention du client n'est pas dérangée par le contenu, il demeure concentré seulement sur l'aspect graphique. ce texte a pour autre avantage d'utiliser des mots de longueur variable, essayant de simuler une occupation normale. la méthode simpliste consistant à copier-coller un court texte plusieurs fois ( « ceci est un faux-texte ceci est un faux-texte ceci est un faux-texte ceci est un faux-texte ceci est un faux-texte » ) a l'inconvénient de ne pas permettre une juste appréciation typographique du résultat final. il circule des centaines de versions différentes du lorem ipsum, mais ce texte aurait originellement été tiré de l'ouvrage de cicéron, de finibus bonorum et malorum ( liber primus ), texte populaire à cette époque, dont l'une des premières phrases est : « neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... » ( « il n'existe personne qui aime la souffrance pour elle-même, ni qui la recherche ni qui la veuille pour ce qu'elle est... » ). expert en utilisabilité des sites web et des logiciels, jakob nielsen souligne que l'une des limites de l'utilisation du faux-texte dans la conception de sites web est que ce texte n'étant jamais lu, il ne permet pas de vérifier sa lisibilité effective. la lecture à l'écran étant plus difficile, cet aspect est pourtant essentiel. nielsen préconise donc l'utilisation de textes représentatifs plutôt que du lorem ipsum. on peut aussi faire remarquer que les formules conçues avec du faux-texte ont tendance à sous-estimer l'espace nécessaire à une titraille immédiatement intelligible, ce qui oblige les rédactions à formuler ensuite des titres simplificateurs, voire inexacts, pour ne pas dépasser l'espace imparti. contrairement à une idée répandue, le faux-texte ne donne même pas un aperçu réaliste du gris typographique, en particulier dans le cas des textes justifiés : en effet, les mots fictifs employés dans le faux-texte ne faisant évidemment pas partie des dictionnaires des logiciels de pao, les programmes de césure ne peuvent pas effectuer leur travail habituel sur de tels textes. par conséquent, l'interlettrage du faux-texte sera toujours quelque peu supérieur à ce qu'il aurait été avec un texte réel, qui présentera donc un aspect plus sombre et moins lisible que le faux-texte avec lequel le graphiste a effectué ses essais. un vrai texte pose aussi des problèmes de lisibilité spécifiques ( noms propres, numéros de téléphone, retours à la ligne fréquents, composition des citations en italiques, intertitres de plus de deux lignes ... ) qu'on n'observe jamais dans le faux-texte."

#Etape 1 Découpage
def slice_text(str):
    return str.split()

text_sliced = slice_text(text_to_compress)

#Etape 1 Reconstruction
def join_text(list):
    return " ".join(list)

#Etape 2 Compression avec dictionnaire fixe
fix_dict = {'texte': '1',
'lorem': '2',
'qui': '3',
'donc': '4',
'est': '5',
'que': '6',
'pour': '7',
'ceci': '8',
'faux-texte': '9',
'dans': '10',
'plus': '11',
'avec': '12'}

def translate(list, dict):
    for i in range(len(list)):
        if list[i] in dict.keys():
            list[i] = dict[list[i]]
    return list

text_compressed = translate(text_sliced, fix_dict)
join_compressed_text = join_text(text_compressed)
# print("Le texte compressé : " + join_compressed_text)

#Etape 3 Décompression
def reverse_dict(dict):
    new_values = list(dict.keys())
    new_keys = list(dict.values())
    new_dict = {}
    for i in range(len(new_keys)):
        new_dict[new_keys[i]]=new_values[i]
    return new_dict

reversed_dict = reverse_dict(fix_dict)
reversed_text = translate(text_compressed, reversed_dict)
join_reversed_text = join_text(reversed_text)
# print("Le texte rétabli : "+ join_reversed_text)

#Etape 4 Un meilleur dictionnaire

#générer un dictionnaire qui compte combien de fois un mot apparait dans une liste
def count_words(list):
    word_counter = {}
    for word in list:
        counter = list.count(word)
        word_counter[word]=counter
    return word_counter

new_list = ['ceci', 'est', 'un', 'faux-texte', 'ceci', 'est']

# print(count_words(new_list))

#filtrer les mots de plus de trois caractères qui apparaissent au moins deux fois
def filter_words(dict):
    dict_filtered = {}
    for key, value in dict.items():
        if len(key)>=3 and int(value)>=2:
            dict_filtered[key]=value
    return dict_filtered

dict_for_example = {'avec': 3, 'tous': 1, 'un': 23, 'nuit': 10}

# print(filter_words(dict_for_example))

#Générer un meilleur dictionnaire pour notre texte de départ
all_words_counted = count_words(text_sliced)
all_words_filtered = filter_words(all_words_counted)
# print(all_words_filtered)

better_dict = {
    'texte': '1',
    'faux-texte': '10',
    'été': '3',
    'lorem': '11',
    'qui': '5',
    'est': '6',
    'que': '7',
    'pas': '8',
    'des': '9',
    'une': '2',
    'ceci': '15',
    'dans': '12',
    "l'espace": '13',
    "l'utilisation": '14',
    'plus': '3'
}

new_compression = join_text(translate(text_sliced, better_dict))
print(len(new_compression))
print(len(text_to_compress))