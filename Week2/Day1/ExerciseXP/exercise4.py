from exercise3 import Family

class TheIncredibles(Family):
    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if self.is_18(name):
                    print(f"{member['incredible_name']} uses the power: {member['power']}")
                else:
                    print(f"{name} is not old enough to use their power.")
                return
        print(f"{name} is not a member of the family.")

    # 3 Present the incredible family
    def incredible_presentation(self):
        print("Here is our powerful family")
        super().family_presentation()


# 4. Create the family
members = [
    {
        'name': 'Michael',
        'age': 35,
        'gender': 'Male',
        'is_child': False,
        'power': 'fly',
        'incredible_name': 'MikeFly'
    },
    {
        'name': 'Sarah',
        'age': 32,
        'gender': 'Female',
        'is_child': False,
        'power': 'read minds',
        'incredible_name': 'SuperWoman'
    }
]

incredible_family = TheIncredibles("Incredibles", members)


# 5
incredible_family.incredible_presentation()


# use_power
incredible_family.use_power("Michael")
incredible_family.use_power("Sarah")


# 6. Born method
incredible_family.born(
    name="Wima",
    age=3,
    gender="Female",
    is_child=True,
    power="Unknown Power",
    incredible_name="Baby Wima"
)


# 7. Present the family again
incredible_family.incredible_presentation()


