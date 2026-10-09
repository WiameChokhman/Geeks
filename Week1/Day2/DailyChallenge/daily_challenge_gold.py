#Happy birthday
from datetime import date

naissance = input("Entrez votre date de naissance (format DD/MM/YYYY) : ")
jour, mois, annee = naissance.split("/")
jour = int(jour)
mois = int(mois)
annee = int(annee)

aujourdhui = date.today()
age = aujourdhui.year - annee
if (aujourdhui.month) < (mois):
    age = age - 1
if (aujourdhui.month) == (mois) and (aujourdhui.day) < (jour):
    age = age - 1

bougies = age % 10

def afficher_gateau(nb_bougies):
    print(("___" + "i" * nb_bougies + "___").center(19))
    print("   |:H:a:p:p:y:|")
    print(" __|___________|__")
    print("|^^^^^^^^^^^^^^^^^|")
    print("|:B:i:r:t:h:d:a:y:|")
    print("|                 |")
    print("~~~~~~~~~~~~~~~~~~~")


afficher_gateau(bougies)

# born on a leap year, display two cakes
if (annee % 4 == 0 and annee % 100 != 0) or (annee % 400 == 0):
    print()
    afficher_gateau(bougies)



