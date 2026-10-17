import math
class Circle:
    def __init__(self, radius=None, diameter=None):
        # Le cercle peut être créé avec un rayon ou un diamètre
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            self.radius = 1

    # Rayon
    @property
    def radius(self):
        return self._radius

    # Modifier le rayon 
    @radius.setter
    def radius(self, value):
        if value < 0:
            raise ValueError("The radius cannot be negative.")
        self._radius = value

    # Calculer le diamètre à partir du rayon
    @property
    def diameter(self):
        return self.radius * 2

    # Calculer l'aire du cercle
    @property
    def area(self):
        return math.pi * self.radius ** 2

    def __str__(self):
        return (
            f"Circle(radius={self.radius}, "
            f"diameter={self.diameter}, area={self.area:.2f})"
        )

    # Additionner deux cercles
    def __add__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return Circle(radius=self.radius + other.radius)

    # Comparer les tailles de deux cercles 
    def __gt__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return self.radius > other.radius

    # Vérifier si deux cercles ont le même rayon
    def __eq__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return self.radius == other.radius

    # Permettre le tri avec sorted()
    def __lt__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return self.radius < other.radius


#Tester :

# Créer des cercles avec un rayon ou un diamètre
c1 = Circle(radius=5)
c2 = Circle(diameter=8)
c3 = Circle(radius=3)
c4 = Circle(radius=5)

# Afficher les cercles
print(c1)
print(c2)

# Consulter le rayon, le diamètre et l'aire
print("Radius:", c1.radius)
print("Diameter:", c1.diameter)
print("Area:", round(c1.area, 2))

# Additionner deux cercles
c5 = c1 + c2
print("Sum:", c5)

# Comparer deux cercles
print("c1 > c2:", c1 > c2)
print("c1 == c4:", c1 == c4)

# Placer les cercles dans une liste et les trier
circles = [c1, c2, c3, c4]
sorted_circles = sorted(circles)

print("Sorted circles:")
for circle in sorted_circles:
    print(circle)
