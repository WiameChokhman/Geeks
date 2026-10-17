
import random 
# 1. function that will simulate the rolling of a dice
def throw_dice():
    return random.randint(1, 6)

# 2.  throwing 2 dice 
def throw_until_doubles():
    count = 0 
    while True:
        dice1 = throw_dice()  # Lance le premier dé
        dice2 = throw_dice()  # Lance le deuxième dé
        count += 1  # Compte un lancer des deux dés
        # Vérifie si les deux dés affichent le même nombre
        if dice1 == dice2:
            break  # Arrête la boucle si un double est obtenu
    return count


# 3. Fonction principale
def main():
    results = []  # Liste qui stocke le nombre de lancers pour chaque double

    for i in range(100):
        throws = throw_until_doubles()  # Cherche un double
        results.append(throws)  

    # Calcule le nombre total de lancers pour les 100 doubles
    total_throws = sum(results)

    # Calcule la moyenne des lancers
    average_throws = total_throws / len(results)

    # Affiche le résultat total
    print("Total throws:", total_throws)

    # Affiche la moyenne 
    print("Average throws to reach doubles:", round(average_throws, 2))



main()
