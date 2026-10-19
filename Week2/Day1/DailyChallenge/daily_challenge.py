class Pagination:
    def __init__(self,items=None,page_size=10):
        self.items = items if items is not None else []
        self.page_size=page_size
        self.current_idx = 0
        self.total_pages = (len(self.items) + self.page_size - 1) // self.page_size

    def get_visible_items(self):
        # Calculer l'index de début
        start = self.current_idx * self.page_size

        # Calculer l'index de fin
        end = start + self.page_size

        # Retourner les éléments de la page actuelle
        return self.items[start:end]
    
    def go_to_page(self, page_num): 
        if page_num < 1 or page_num > self.total_pages:
            print("Invalid page number!")
        else:
            self.current_idx = page_num - 1 #current_idx commence par 0

    def first_page(self):
        self.current_idx = 0
        return self

    def last_page(self):
        self.current_idx = self.total_pages - 1
        return self

    def next_page(self):
        #Si on n'est pas à la dernière page, on ajoute 1 à l'index
        if self.current_idx < self.total_pages - 1:
            self.current_idx += 1
        return self #Si on est déjà à la dernière page, l'index ne change pas

    def previous_page(self):
        if self.current_idx > 0:
            self.current_idx -= 1
        return self

    def display_current_page(self):
        return "\n".join(self.get_visible_items())


alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

print(p.get_visible_items())
# ['a', 'b', 'c', 'd']

p.next_page()
print(p.get_visible_items())
# ['e', 'f', 'g', 'h']

p.last_page()
print(p.get_visible_items())
# ['y', 'z']

p.go_to_page(7)
print(p.current_idx + 1)
# Output: 7

p.go_to_page(0)
# Expected behavior:
# Prints an invalid page message and keeps the current page unchanged.
