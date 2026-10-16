
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

# Cat objects
c1 = Cat("Enzo", 2)
c2 = Cat("Lili", 1)
c3 = Cat("kity", 5)

def oldest_cat(cats):
    oldest_cat = cats[0]
    for cat in cats:
        if cat.age > oldest_cat.age:
            oldest_cat = cat
    return oldest_cat

cats = [c1, c2, c3]
oldest = oldest_cat(cats)

print(f"The oldest cat is {oldest.name}, and is {oldest.age} years old.")
