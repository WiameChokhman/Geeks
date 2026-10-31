
# Display the game board
def display_board(board):
    print("\n TIC TAC TOE")
    print(" *************")

    for i in range(3):
        print(" *   |   |   *")
        print(f" * {board[i * 3]} | {board[i * 3 + 1]} | {board[i * 3 + 2]} *")
        print(" *   |   |   *")

        if i < 2:
            print(" *************")

    print(" *************\n")


# Get the player's input
def player_input(player, board):

    while True:
        try:
            row = int(input(f"Player {player}, enter row (1-3): "))
            col = int(input(f"Player {player}, enter column (1-3): "))

            # Check if the position is valid
            if row < 1 or row > 3 or col < 1 or col > 3:
                print("Invalid position! Choose numbers between 1 and 3.")
                continue

            # Convert row and column into a list index
            position = (row - 1) * 3 + (col - 1)

            # Check if the cell is empty
            if board[position] != " ":
                print("This position is already occupied! Try again.")
                continue

            return position

        except ValueError:
            print("Please enter valid numbers!")


# Check if a player has won
def check_win(board, player):

    winning_combinations = [
        [0, 1, 2],  # First row
        [3, 4, 5],  # Second row
        [6, 7, 8],  # Third row
        [0, 3, 6],  # First column
        [1, 4, 7],  # Second column
        [2, 5, 8],  # Third column
        [0, 4, 8],  # Diagonal
        [2, 4, 6]   # Other diagonal
    ]

    for combination in winning_combinations:
        if all(board[i] == player for i in combination):
            return True

    return False


# Main game function
def play():

    print("Welcome to TIC TAC TOE!")

    # Create an empty board
    board = [" "] * 9

    # First player starts with X
    current_player = "X"

    # Game loop
    while True:

        # Display the board
        display_board(board)

        # Get the player's position
        position = player_input(current_player, board)

        # Place the player's mark
        board[position] = current_player

        # Check if the player has won
        if check_win(board, current_player):
            display_board(board)
            print(f"Player {current_player} wins!")
            break

        # Check if the board is full (draw)
        if " " not in board:
            display_board(board)
            print("It's a tie!")
            break

        # Switch players
        if current_player == "X":
            current_player = "O"
        else:
            current_player = "X"

    print("Game Over!")


# Start the game
play()
