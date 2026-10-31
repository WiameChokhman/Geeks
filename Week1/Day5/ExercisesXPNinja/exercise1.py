
class Phone:

    # Constructor
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    # Make a call
    def call(self, other_phone):
        call_info = f"{self.phone_number} called {other_phone.phone_number}"

        print(call_info)
        self.call_history.append(call_info)

    # Show call history
    def show_call_history(self):
        print("Call history:")
        for call in self.call_history:
            print(call)

    # Send a message
    def send_message(self, other_phone, content):
        message = {
            "to": other_phone.phone_number,
            "from": self.phone_number,
            "content": content
        }

        self.messages.append(message)
        print("Message sent successfully!")

    # Show outgoing messages
    def show_outgoing_messages(self):
        print("Outgoing messages:")

        for message in self.messages:
            if message["from"] == self.phone_number:
                print(message)

    # Show incoming messages
    def show_incoming_messages(self):
        print("Incoming messages:")

        for message in self.messages:
            if message["to"] == self.phone_number:
                print(message)

    # Show messages from a specific phone
    def show_messages_from(self, other_phone):
        print("Messages from", other_phone.phone_number, ":")

        for message in self.messages:
            if message["from"] == other_phone.phone_number:
                print(message)


# TEST THE CLASS

# Create three phone objects
phone1 = Phone("0612345678")
phone2 = Phone("0698765432")
phone3 = Phone("0655555555")

# Test calls
phone1.call(phone2)
phone1.call(phone3)

print()

# Show call history
phone1.show_call_history()

print()

# Test messages
phone1.send_message(phone2, "Hello, how are you?")
phone2.send_message(phone1, "I am fine, thank you!")
phone3.send_message(phone1, "Are you available?")

print()

# Show outgoing messages of phone1
phone1.show_outgoing_messages()

print()

# Show incoming messages of phone1
phone1.show_incoming_messages()

print()

# Show messages from phone2
phone1.show_messages_from(phone2)
