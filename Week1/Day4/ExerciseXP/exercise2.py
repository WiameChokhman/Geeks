# Exercise 2 : Cinemax
family1 = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
total_cost = 0
counter = 0
for age in family1.values():
    if age < 3:
        total_cost += 0
    elif 3 <= age <= 12:
        counter += 1
        total_cost += 10
    else:
        counter += 1
        total_cost += 15
print(f"Family members: {family1}")
print(f"Number of family members have to pay: {counter}")
print(f"Total cost is: ${total_cost}")

print(" Bonus exercice Cenimax")
#Bonus: Exercice 2 
#Ask the user to input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).
family2 = {}
while True:
    name = input("Enter a family member's name: ")
    age = int(input("Enter the family member's age: "))
    family2[name] = age
    more = input("Do you want to add another family member? (y/n): ")
    if more.lower() != 'y':
        break

total_cost = 0
counter = 0
for age in family2.values():
    if age < 3:
        total_cost += 0
    elif 3 <= age <= 12:
        counter += 1
        total_cost += 10
    else:
        counter += 1
        total_cost += 15
print(f"Family members: {family2}")
print(f"Number of family members have to pay: {counter}")
print(f"Total cost is: ${total_cost}")

