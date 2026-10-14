#Exercise 8 : Star Wars Quiz
data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def check_answer(question, answer):
    user_answer = input(question + " ")
    if user_answer.strip().lower() == answer.lower():
        print("Correct!")
        return True, user_answer
    else:
        print(f"Incorrect! The correct answer is: {answer}")
        return False, user_answer


def ask_questions():
    correct_answers = 0
    incorrect_answers = 0
    wrong_answers = []

    for item in data:
        is_correct, user_answer = check_answer(item["question"], item["answer"])
        if is_correct:
            correct_answers += 1
        else:
            incorrect_answers += 1
            wrong_answers.append({
                "question": item["question"],
                "user_answer": user_answer,
                "correct_answer": item["answer"],
            })

    return correct_answers, incorrect_answers, wrong_answers


def inform_user(correct_answers, incorrect_answers, wrong_answers):
    print(f"\nYou got {correct_answers} correct and {incorrect_answers} incorrect.")
    if wrong_answers:
        print("Questions you answered incorrectly:")
        for item in wrong_answers:
            print(f"- {item['question']}")
            print(f"  Your answer: {item['user_answer']}")
            print(f"  Correct answer: {item['correct_answer']}")


def answ():
    while True:
        correct_answers, incorrect_answers, wrong_answers = ask_questions()
        inform_user(correct_answers, incorrect_answers, wrong_answers)

        if incorrect_answers <= 3:
            break

        play_again = input("You had more than 3 wrong answers. Would you like to play again? (yes/no) ")
        if play_again.strip().lower() not in ("yes", "y"):
            break


answ()