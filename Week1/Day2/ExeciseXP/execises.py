# Exercise 1
print("Exercise 1: Hello World")
print("Hello World \n"*4)

# Exercise 2
print("Exercise 2: Math")
print(f"Write code to calculate the result of (99³) × 8 = {(99**3)*8}")

# Exercise 3
print("Exercise 3: What is your name?")
name_user = input("What is your name? ")
if name_user=="Wiame":
    print("We have the same name!")
else:
    print("Your name is different from mine!")

# Exercise 4 : Tall enough to ride a roller coaster
height = float(input("What is your height in centimeters? "))
if height > 145:
    print("Yes, you are tall enough to ride the roller coaster.")
else:
    print("No, you are not tall enough to ride the roller coaster.")

#Exercise 5 : Favorite Numbers
print("Exercise 5: Sets")
my_fav_numbers = {2, 14, 8, 27, 24, 21}
print(f" {my_fav_numbers} are my favorite numbers.")
my_fav_numbers.add(20)
my_fav_numbers.add(40)
print(f" {my_fav_numbers} are my favorite numbers.")
friend_fav_numbers = {3, 7, 9, 14, 21}
print(f" {friend_fav_numbers} are my friend's favorite numbers.")
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(f" {our_fav_numbers} are our favorite numbers.")

#Exercise 6: Tuple
print("Exercise 6: Tuple")
tuple = (1, 2, 3, 4, "hello")
print(f" {tuple} is a tuple")
print("Is it possible to add more integers to the tuple?")
print("No, tuples are immutable")

#Exercise 7: List
print("Exercise 7: List")
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
basket.count("Apples")
basket.clear()
print(basket)

# Exercise 8 : Sandwich Orders
print("Exercise 8: Sandwich Orders")
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
sandwich_orders.remove("Pastrami sandwich")
finished_sandwiches = []
for sandwich in sandwich_orders:
    print(f"I made your {sandwich.lower()}")
    finished_sandwiches.append(sandwich)
    sandwich_orders.remove(sandwich)
