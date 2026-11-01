
class GameOfLife:

    # Constructor
    def __init__(self, initial_state, expandable=False, max_size=10000):

        self.grid = [
            [1 if cell == "1" else 0 for cell in row]
            for row in initial_state
        ]

        self.rows = len(self.grid)
        self.cols = len(self.grid[0])

        self.expandable = expandable
        self.max_size = max_size

    # Display the grid
    def display_grid(self):

        print("\nGeneration:")

        for row in self.grid:
            print(" ".join("*" if cell == 1 else "." for cell in row))

    # Count the eight neighbours
    def count_neighbors(self, row, col):

        count = 0

        for i in range(-1, 2):
            for j in range(-1, 2):

                # Do not count the cell itself
                if i == 0 and j == 0:
                    continue

                new_row = row + i
                new_col = col + j

                # Check grid boundaries
                if 0 <= new_row < self.rows and 0 <= new_col < self.cols:
                    count += self.grid[new_row][new_col]

        return count

    # Calculate the next generation
    def next_generation(self):

        new_grid = []

        for row in range(self.rows):

            new_row = []

            for col in range(self.cols):

                neighbors = self.count_neighbors(row, col)
                current_cell = self.grid[row][col]

                # Apply the rules of the game
                if current_cell == 1:

                    if neighbors == 2 or neighbors == 3:
                        new_row.append(1)
                    else:
                        new_row.append(0)

                else:

                    if neighbors == 3:
                        new_row.append(1)
                    else:
                        new_row.append(0)

            new_grid.append(new_row)

        # Update the grid after calculating all cells
        self.grid = new_grid

    # Run the game
    def play(self, generations=10):

        print("Welcome to Conway's Game of Life!")

        previous_states = set()

        for generation in range(generations):

            state = tuple(tuple(row) for row in self.grid)

            # Check if the same state has already appeared
            if state in previous_states:
                print("A previous state has appeared again!")
                print("The game has entered a cycle.")
                break

            previous_states.add(state)

            print(f"\n--- Generation {generation} ---")
            self.display_grid()

            self.next_generation()

            # Check if the grid is empty
            if not any(any(row) for row in self.grid):
                print("\nAll cells are dead. Game over!")
                self.display_grid()
                break

        else:
            print("\nMaximum number of generations reached.")


# TEST 1: Blinker pattern
blinker = [
    "00000",
    "00100",
    "00100",
    "00100",
    "00000"
]

game = GameOfLife(blinker)
game.play(10)
