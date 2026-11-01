
class BankAccount:

    # Constructor
    def __init__(self, balance):
        self.balance = balance

    # Deposit money
    def deposit(self, amount):

        if amount <= 0:
            raise Exception("The deposit amount must be positive.")

        self.balance += amount
        print("Deposit successful!")
        print("New balance:", self.balance)

    # Withdraw money
    def withdraw(self, amount):

        if amount <= 0:
            raise Exception("The withdrawal amount must be positive.")

        if amount > self.balance:
            raise Exception("Insufficient balance.")

        self.balance -= amount
        print("Withdrawal successful!")
        print("New balance:", self.balance)


# Test
account = BankAccount(1000)

account.deposit(500)
account.withdraw(200)

class MinimumBalanceAccount(BankAccount):

    # Constructor
    def __init__(self, balance, minimum_balance=0):
        super().__init__(balance)
        self.minimum_balance = minimum_balance

    # Override withdraw method
    def withdraw(self, amount):

        if amount <= 0:
            raise Exception("The withdrawal amount must be positive.")

        if self.balance - amount < self.minimum_balance:
            raise Exception("Minimum balance requirement not respected.")

        self.balance -= amount
        print("Withdrawal successful!")
        print("New balance:", self.balance)


# Test
account2 = MinimumBalanceAccount(1000, 200)

account2.withdraw(300)


class BankAccount:

    def __init__(self, balance, username, password):
        self.balance = balance
        self.username = username
        self.password = password
        self.authenticated = False

    # Authenticate the user
    def authenticate(self, username, password):

        if username == self.username and password == self.password:
            self.authenticated = True
            print("Authentication successful!")
            return True

        self.authenticated = False
        print("Invalid username or password.")
        return False

    # Check authentication
    def check_authentication(self):

        if not self.authenticated:
            raise Exception("Please authenticate first.")

    # Deposit money
    def deposit(self, amount):

        self.check_authentication()

        if amount <= 0:
            raise Exception("Amount must be positive.")

        self.balance += amount
        print("Deposit successful!")
        print("New balance:", self.balance)

    # Withdraw money
    def withdraw(self, amount):

        self.check_authentication()

        if amount <= 0:
            raise Exception("Amount must be positive.")

        if amount > self.balance:
            raise Exception("Insufficient balance.")

        self.balance -= amount
        print("Withdrawal successful!")
        print("New balance:", self.balance)


# Test
account = BankAccount(1000, "wiame", "1234")

# Try to deposit without authentication
try:
    account.deposit(200)
except Exception as e:
    print("Error:", e)

# Authenticate
account.authenticate("wiame", "1234")

# Deposit after authentication
account.deposit(500)

# Withdraw after authentication
account.withdraw(200)


class ATM:

    # Constructor
    def __init__(self, account_list, try_limit):

        # Validate account_list
        if not isinstance(account_list, list):
            raise Exception("account_list must be a list.")

        for account in account_list:
            if not isinstance(account, BankAccount):
                raise Exception("Invalid account in account_list.")

        self.account_list = account_list

        # Validate try_limit
        try:
            if not isinstance(try_limit, int) or isinstance(try_limit, bool) or try_limit <= 0:
                raise Exception("try_limit must be a positive integer.")

            self.try_limit = try_limit

        except Exception as e:
            print("Error:", e)
            print("Default try_limit is set to 2.")
            self.try_limit = 2

        self.current_tries = 0
        self.running = True

        # Start the main menu
        self.show_main_menu()

    # Main menu
    def show_main_menu(self):

        while self.running:

            print("\n===== ATM MAIN MENU =====")
            print("1. Log in")
            print("2. Exit")

            choice = input("Choose an option: ")

            if choice == "1":

                username = input("Enter username: ")
                password = input("Enter password: ")

                self.log_in(username, password)

            elif choice == "2":

                print("Thank you for using our ATM!")
                self.running = False

            else:
                print("Invalid choice. Try again.")

    # Log in
    def log_in(self, username, password):

        while self.current_tries < self.try_limit:

            for account in self.account_list:

                if account.authenticate(username, password):

                    self.show_account_menu(account)
                    return

            self.current_tries += 1

            remaining = self.try_limit - self.current_tries

            if self.current_tries >= self.try_limit:

                print("Maximum login attempts reached!")
                print("ATM is shutting down.")
                self.running = False
                return

            print("Incorrect credentials.")
            print("Remaining attempts:", remaining)

            username = input("Enter username: ")
            password = input("Enter password: ")

    # Account menu
    def show_account_menu(self, account):

        while True:

            print("\n===== ACCOUNT MENU =====")
            print("1. Deposit")
            print("2. Withdraw")
            print("3. Exit")

            choice = input("Choose an option: ")

            if choice == "1":

                try:
                    amount = int(input("Enter deposit amount: "))
                    account.deposit(amount)

                except (ValueError, Exception) as e:
                    print("Error:", e)

            elif choice == "2":

                try:
                    amount = int(input("Enter withdrawal amount: "))
                    account.withdraw(amount)

                except (ValueError, Exception) as e:
                    print("Error:", e)

            elif choice == "3":

                account.authenticated = False
                print("Logged out successfully!")
                break

            else:
                print("Invalid choice. Try again.")



class MinimumBalanceAccount(BankAccount):

    def __init__(self, balance, username, password, minimum_balance=0):

        super().__init__(balance, username, password)
        self.minimum_balance = minimum_balance

    # Override withdraw
    def withdraw(self, amount):

        self.check_authentication()

        if amount <= 0:
            raise Exception("Amount must be positive.")

        if self.balance - amount < self.minimum_balance:
            raise Exception("Minimum balance requirement not respected.")

        self.balance -= amount

        print("Withdrawal successful!")
        print("New balance:", self.balance)
