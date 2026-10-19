# Exercise 1 : Dunder Methods
# What will be the output?
# The output is : ['a', 'b', 'c']
class PrintList():
    def __init__(self, my_list):
        self.my_list = my_list

    def __repr__(self):
        return str(self.my_list)


print_list_instance = PrintList(["a", "b", "c"])
print(print_list_instance.__repr__())





