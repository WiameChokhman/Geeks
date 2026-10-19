# Exercise 2 : Exceptions
def sum_numbers(my_list):
    total = 0
    for element in my_list:
        try:
            total += element
        except TypeError:
            continue

    return total


my_list = [2, 3, 1, 2, "four", 42, 1, 5, 3, "imanumber"]
print(sum_numbers(my_list))