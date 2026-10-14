word = input("Enter a word: ")

letter_indexes = {}
for index, letter in enumerate(word):
	# On garde la position de chaque lettre dans le dictionnaire.
	letter_indexes.setdefault(letter, []).append(index)

print(letter_indexes)
