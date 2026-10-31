cars = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

manufacturers = cars.split(", ")

print("List of manufacturers:", manufacturers)
print("Number of manufacturers:", len(manufacturers))

# l'ordre décroissant (Z-A)
manufacturers.sort(reverse=True)

print("Manufacturers (Z-A):", manufacturers)


# Compter les noms ave lettre 'o'
count_o = 0

for name in manufacturers:
    if "o" in name.lower():
        count_o += 1

print("Names containing the letter 'o':", count_o)


# Compter les noms qui ne contiennent pas la lettre 'i'
count_i = 0

for name in manufacturers:
    if "i" not in name.lower():
        count_i += 1

print("Names without the letter 'i':", count_i)


# BONUS 1 : Supprimer les doublons
cars_list = ["Honda", "Volkswagen", "Toyota", "Ford Motor",
             "Honda", "Chevrolet", "Toyota"]

unique_manufacturers = list(set(cars_list))

print("Companies without duplicates:", ", ".join(unique_manufacturers))
print("Number of companies without duplicates:", len(unique_manufacturers))


# BONUS 2 : Trier de A à Z et inverser les lettres de chaque nom
ascending = sorted(unique_manufacturers)

reversed_names = []

for name in ascending:
    reversed_names.append(name[::-1])

print("Manufacturers (A-Z) with reversed names:", reversed_names)