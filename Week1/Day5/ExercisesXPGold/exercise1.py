
import math

class Circle:

    # Constructor
    def __init__(self, radius=1.0):
        self.radius = radius

    # Calculate the perimeter
    def calculate_perimeter(self):
        return 2 * math.pi * self.radius

    # Calculate the area
    def calculate_area(self):
        return math.pi * self.radius ** 2

    # Print the geometrical definition
    def definition(self):
        print("A circle is a geometrical shape consisting of all points")
        print("in a plane that are at a fixed distance (radius) from a center.")


# Create objects
circle1 = Circle()
circle2 = Circle(5)

# Display results for circle1
print("Circle 1:")
print("Radius:", circle1.radius)
print("Perimeter:", circle1.calculate_perimeter())
print("Area:", circle1.calculate_area())

print()

# Display results for circle2
print("Circle 2:")
print("Radius:", circle2.radius)
print("Perimeter:", circle2.calculate_perimeter())
print("Area:", circle2.calculate_area())

print()

# Display the definition
circle1.definition()
