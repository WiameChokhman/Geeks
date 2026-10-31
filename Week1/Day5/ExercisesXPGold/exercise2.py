
import random

class MyList:

    # Constructor
    def __init__(self, letters):
        self.letters = letters

    # Return the reversed list
    def reverse_list(self):
        return self.letters[::-1]

    # Return the sorted list
    def sort_list(self):
        return sorted(self.letters)

    # Bonus: Generate a random list with the same length
    def generate_random_list(self):
        random_list = [random.randint(1, 100) for i in range(len(self.letters))]
        return random_list


# Create an object
mylist = MyList([2, 55, 1, 0, 100])

# Display the original list
print("Original list:", mylist.letters)

# Display the reversed list
print("Reversed list:", mylist.reverse_list())

# Display the sorted list
print("Sorted list:", mylist.sort_list())

# Display the random list
print("Random list:", mylist.generate_random_list())
