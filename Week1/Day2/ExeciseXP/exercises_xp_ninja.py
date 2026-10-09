#Exercise 1 : Outputs
print("3 <= 3 < 9 le résultat prédit est True")
print("3 == 3 == 3 le résultat prédit est True")
print("bool(0) le résultat prédit est False")
print("bool(5 == \"5\") le résultat prédit est False")
print("bool(4 == 4) == bool(\"4\" == \"4\") le résultat prédit est True")
print("bool(bool(None)) le résultat prédit est False")

x = (1 == True)
y = (1 == False)
a = True + 4
b = False + 10

print("x is", x)
print("y is", y)
print("a:", a)
print("b:", b)

#Exercise 2 : Longest word without a specific character
longest_length = 0
while True:
    sentence = input("Enter a sentence without the character 'A': ")
    if "A" in sentence or "a" in sentence:
        print("The sentence contains the character 'A'. Please try again.")
    else:
        if len(sentence) > longest_length:
            longest_length = len(sentence)
            print(f"Congratulations new longest sentence ({longest_length} characters)")
        else:
            print(f"That sentence is not longer than your current record ")
    choice = input("Do you want to try again? (y/n): ")
    if choice.lower() != "y":
        break

#Exercise 3: Working on a paragraph

paragraph = "I am a motivated and curious person with a strong interest in Data Science, Artificial Intelligence, and Machine Learning. I enjoy learning new technologies, solving problems, and developing innovative solutions. I am adaptable, eager to learn, and comfortable working both independently and in a team. My goal is to strengthen my skills, gain practical experience, and contribute to meaningful projects in AI and data-driven innovation."
print(paragraph)
print(f"The paragraph contains {len(paragraph)} characters.")
sentences = paragraph.split('.')
print(f"The paragraph contains {len(sentences) - 1} sentences")
words = paragraph.split()
print(f"The paragraph contains {len(words)} words.")
unique_words = set(words)
print(f"The paragraph contains {len(unique_words)} unique words")

non_whitespace_characters = len(paragraph.replace(" ", ""))
print(f"The paragraph contains {non_whitespace_characters} non-whitespace characters")

if len(sentences) > 1:
    avg_words_per_sentence = len(words) / (len(sentences) - 1)
    print(f"The average amount of words per sentence is {avg_words_per_sentence:.2f}")
else:
    print("The paragraph does not contain any sentences")

non_unique_words = len(words) - len(unique_words)
print(f"The paragraph contains {non_unique_words} non-unique words")