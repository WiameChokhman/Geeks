from game import Game
def get_user_menu_choice():
    # Afficher le menu
    print("\nMenu:")
    print("(g) Play a new game")
    print("(x) Show scores and exit")
    choice = input("Selectinner votre choix : ").lower()

    if choice not in ["g", "x"]:
        print("Invalid choice!")
        return None

    return choice

def print_results(results):
    print("\nGame Results:")
    print("You won", results["win"], "times")
    print("You lost", results["loss"], "times")
    print("You drew", results["draw"], "times")

    print("\nThank you for playing!")


def main():
    # Initialiser les compteurs
    results = {
        "win": 0,
        "loss": 0,
        "draw": 0
    }

    # Répéter le menu jusqu'à la sortie
    while True:
        choice = get_user_menu_choice()

        if choice is None:
            continue

        if choice == "g":
            # Créer un objet Game et jouer
            game = Game()
            result = game.play()

            # Mettre à jour le compteur correspondant
            results[result] += 1

        elif choice == "x":
            # Afficher les scores puis terminer
            print_results(results)
            break


# Lancer le programme
if __name__ == "__main__":
    main()