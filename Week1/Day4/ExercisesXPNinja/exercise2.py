def get_full_name(first_name, last_name, middle_name=None):

    if middle_name:
        full_name = first_name + " " + middle_name + " " + last_name
    else:
        full_name = first_name + " " + last_name

    return full_name.title()


# Test 1 : Avec un middle_name
print(get_full_name(first_name="john", middle_name="hooker", last_name="lee"))

# Test 2 : Sans middle_name
print(get_full_name(first_name="bruce", last_name="lee"))