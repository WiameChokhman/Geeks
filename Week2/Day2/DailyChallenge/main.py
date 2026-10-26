
from text_analyzer import TextAnalyzer

text = "Python is fun and Python is powerful"

analyzer = TextAnalyzer(text)

# Tester __str__()
print(analyzer)

# Tester __len__()
print("Characters:", len(analyzer))

# Tester word_count()
print("Words:", analyzer.word_count())

# Tester count_word()
print("Occurrences of Python:", analyzer.count_word("Python"))


# Test 1 : texte vide
try:
    empty_analyzer = TextAnalyzer("")
except Exception as error:
    print("Error:", error)

# Test 2 : mot vide
try:
    analyzer.count_word("")
except Exception as error:
    print("Error:", error)
