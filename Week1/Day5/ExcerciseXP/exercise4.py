class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print("Animals in", self.name, ":")
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
        else:
            print(animal_sold, "is not in the zoo.")

    def sort_animals(self):
        groups = {}

        for animal in sorted(self.animals):
            first_letter = animal[0].upper()

            if first_letter not in groups:
                groups[first_letter] = []

            groups[first_letter].append(animal)

        return groups

    def get_groups(self):
        groups = self.sort_animals()

        for letter, animals in groups.items():
            print(letter, ":", ", ".join(animals))


new_york_zoo = Zoo("New York Zoo")

# Add animals
new_york_zoo.add_animal("Giraffe")
new_york_zoo.add_animal("Bear")
new_york_zoo.add_animal("Cat")
new_york_zoo.add_animal("Dog")

new_york_zoo.get_animals()

print("Sell an animal")
new_york_zoo.sell_animal("Cat")


print("Animal groups")
new_york_zoo.get_groups()
