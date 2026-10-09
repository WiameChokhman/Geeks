#Exercise 1: What is the Season?
print("Exercise 1: What is the Season?")
month = input("Enter the number of a month: ")
if month in ["3", "4", "5"]:
    print("The season is Spring")
elif month in ["6", "7", "8"]:
    print("The season is Summer")
elif month in ["9", "10", "11"]:
    print("The season is Autumn")
elif month in ["12", "1", "2"] :
    print("The season is Winter")
else:
    print("Number is not valid enter a number between 1 and 12.")

#Exercise 2: For Loop
print("Exercise 2: For Loop")
print("Exercise 2: For Loop")
print("Question 1")
for i in range(1, 21):
    print(i)
print("Question 2")
for i in range(1, 21):
    if (i-1) % 2 == 0:
        print(i)

#Exercise 3: While Loop
print("Exercise 3: While Loop")
name_user = input("What is your name? ")
while name_user != "Wiame":
    name_user = input("What is your name? ")

#Exercise 4: Check the index
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
name_check = input("Enter a name to check: ")
if name_check in names:
    index = names.index(name_check)
    print(f"{name_check} is in the list at index {index}")


#Exercise 5: Greatest Number
print("Exercise 5: Greatest Number")
a=int(input("Input the 1st number: "))
b=int(input("Input the 2nd number: "))
c=int(input("Input the 3rd number: "))
greatest = max(a, b, c)
print(f"The greatest number is: {greatest}")

#Exercise 6: Random number
print("Exercise 6: Random number")
import random
count_win = 0
count_lose = 0
while True:
    number = int(input("Input a number: between 1 and 9: "))
    random_number = random.randint(1, 9)
    if number == random_number:
        count_win += 1
        print("Winner")
       
    else:
        print("Better luck next time")
        count_lose += 1

    print("You want to try again? (y/n)")
    if input().lower() == "n":
        break
print(f"Results - Wins: {count_win}, Losses: {count_lose}")
