class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    # Add a child to the family
    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations to the {self.last_name} fo new baby")

    # Check family member 
    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] > 18
        return False

    # Family information
    def family_presentation(self):
        print(f"Family name: {self.last_name}")
        print("Family members:")
        for member in self.members:
            print(member)


members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
]

my_family = Family("Chokhman", members)


my_family.born(
    name="Rahma",
    age=3,
    gender="Female",
    is_child=True
)

print("Is Michael over 18?", my_family.is_18("Michael"))
print("Is Rahma over 18?", my_family.is_18("Rahma"))

my_family.family_presentation()
