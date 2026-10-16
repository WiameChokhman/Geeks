class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return (self.weight / self.age) * 10

    def fight(self, other_dog):
        score1 = self.run_speed() * self.weight
        score2 = other_dog.run_speed() * other_dog.weight

        if score1 > score2:
            return f"{self.name} won the fight!"
        elif score2 > score1:
            return f"{other_dog.name} won the fight!"
        else:
            return "It's a tie!"


# Create 3 dogs
dog1 = Dog("Rex", 5, 33)
dog2 = Dog("Pepo", 7, 24)
dog3 = Dog("Roby", 1, 22)


print(dog2.bark())
print("Pepo running speed:", dog2.run_speed())

print(dog1.fight(dog2))
print(dog2.fight(dog3))
print(dog1.fight(dog3))
