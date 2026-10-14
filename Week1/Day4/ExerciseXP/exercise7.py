#Exercise 7 : Temperature Advice

month = int(input("Enter the number of the month (1-12): "))
while month < 1 or month > 12:
    print("Invalid input. Please enter a number between 1 and 12.")
    month = int(input("Enter the number of the month (1-12): "))    
    
if 1 <= month <= 3:
    season = "winter"
elif 4 <= month <= 6:
    season = "spring"
elif 7 <= month <= 9:
    season = "summer"
else:
    season = "autumn"

def get_random_temp(season):
    import random
    if season == "winter":
        return random.uniform(-10, 16)
    elif season == "spring":
        return random.uniform(0, 23)
    elif season == "summer":
        return random.uniform(16, 40)
    elif season == "autumn":
        return random.uniform(23, 32)

def main():
    temp = get_random_temp(season)
    print(f"The temperature is {temp} degrees Celsius")
    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif temp <= 16:
        print("Quite chilly! Don’t forget your coat")
    elif temp <= 23:
        print("The weather is pleasant")
    elif temp <= 32:
        print("It's warm, wear light clothing")
    else:
        print("It's quite warm, stay hydrated!")

main()