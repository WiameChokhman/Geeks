
# Dictionary: English letters and their Morse codes
morse_code = {
    'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',
    'E': '.',     'F': '..-.',  'G': '--.',   'H': '....',
    'I': '..',    'J': '.---',  'K': '-.-',   'L': '.-..',
    'M': '--',    'N': '-.',    'O': '---',   'P': '.--.',
    'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-',
    'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',
    'Y': '-.--',  'Z': '--..'
}


# 1. Convert English text to Morse code
def text_to_morse(text):
    words = text.upper().split()
    morse_words = []

    for word in words:
        morse_letters = []

        for letter in word:
            if letter in morse_code:
                morse_letters.append(morse_code[letter])

        morse_words.append(" ".join(morse_letters))

    return " / ".join(morse_words)


# 2. Convert Morse code to English text
def morse_to_text(morse):
    reverse_code = {value: key for key, value in morse_code.items()}

    words = morse.split(" / ")
    english_words = []

    for word in words:
        letters = word.split()
        english_letters = []

        for code in letters:
            if code in reverse_code:
                english_letters.append(reverse_code[code])

        english_words.append("".join(english_letters))

    return " ".join(english_words)


# Tests
text = "HELLO WORLD"

morse = text_to_morse(text)
print("English:", text)
print("Morse:", morse)

decoded = morse_to_text(morse)
print("Decoded text:", decoded)
