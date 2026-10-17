# Exercise 1: Birthday Look-up
birthdays = {
    "wiame": "2004/02/14",
    "achraf": "1999/12/17",
    "hasna": "1978/06/18",
    "imane": "2001/08/27",
    "ikram": "2000/11/11",
}

print("You can look up the birthdays of the people in the list!")
name = input("Give me a person's name: ")

if name in birthdays:
    print(f"{name}'s birthday is {birthdays[name]}.")
else:
    print("That person's name is not in the list.")

