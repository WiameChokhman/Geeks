# Exercise 6 : Let’s create some personalized shirts !
def make_shirt(size="L", message="I love Python"):
    print(f"The size of the shirt is {size} and the message on it is : {message}")


#Call the function, in order to make a large shirt with the default message
make_shirt()
make_shirt("M")
make_shirt("S", "La vie est belle")
make_shirt(message="La vie est belle", size="S")
