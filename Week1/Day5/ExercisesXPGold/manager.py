
class MenuManager:

    # Constructor
    def __init__(self):
        self.menu = [
            {"name": "Soup", "price": 10, "spice": "B", "gluten": False},
            {"name": "Hamburger", "price": 15, "spice": "A", "gluten": True},
            {"name": "Salad", "price": 18, "spice": "A", "gluten": False},
            {"name": "French Fries", "price": 5, "spice": "C", "gluten": False},
            {"name": "Beef bourguignon", "price": 25, "spice": "B", "gluten": True}
        ]

    # Add a new dish
    def add_item(self, name, price, spice, gluten):
        new_dish = {
            "name": name,
            "price": price,
            "spice": spice,
            "gluten": gluten
        }

        self.menu.append(new_dish)
        print(name, "has been added to the menu.")

    # Update an existing dish
    def update_item(self, name, price, spice, gluten):

        for dish in self.menu:
            if dish["name"].lower() == name.lower():
                dish["price"] = price
                dish["spice"] = spice
                dish["gluten"] = gluten

                print(name, "has been updated.")
                return

        print(name, "is not in the menu.")

    # Remove an existing dish
    def remove_item(self, name):

        for dish in self.menu:
            if dish["name"].lower() == name.lower():
                self.menu.remove(dish)
                print(name, "has been removed.")
                print("Updated menu:", self.menu)
                return

        print(name, "is not in the menu.")


# Create an object
manager = MenuManager()

# Display the initial menu
print("Initial menu:")
print(manager.menu)

# Add a new dish
manager.add_item("Pizza", 20, "A", False)

# Update a dish
manager.update_item("Soup", 12, "C", False)

# Remove a dish
manager.remove_item("Salad")
