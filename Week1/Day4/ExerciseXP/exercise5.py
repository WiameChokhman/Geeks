# Exercise 5 : Random
def guess_number(number):

    while True:
        if number < 1 or number > 100:
            print("Invalid input. Please enter a number between 1 and 100.")
            number = int(input("Enter a number between 1 and 100: "))
        else:
            break

    import random
    random_number = random.randint(1, 100)
    if number == random_number:
        print(f"Congratulations! You guessed the correct number: {random_number}")
    else:
        print(f"Sorry, Your number is {number}. The correct number was {random_number}")

nb = int(input("Enter a number between 1 and 100: "))
guess_number(nb)
    