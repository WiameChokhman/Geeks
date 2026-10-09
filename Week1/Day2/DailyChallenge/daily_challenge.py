#Challenge 1
number , length = input("Enter a number: "), input("Enter a length: ")
liste = []
for i in range(1,int(length)+1):
    a = int(number) * i
    liste.append(a)

print(f"Number: {number} - Length: {length} -> {liste}")
   
#Challenge 2
#Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.
#user's word : "ppoeemm" ➞ "poem"

word = input("Enter a word: ")
list_word = list(word)
for i in range(len(list_word) - 1):
    if list_word[i] == list_word[i + 1]:
        list_word[i] = ""
new_word = "".join(list_word)   
print(f"user's word : {word} -> {new_word}")