
import UserFavoriteAnimals from "./UserFavoriteAnimals";
import Exercise from "./Exercise3";

function App() {

  // Exercise 1: Working with JSX
  const myElement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;

  // Exercise 2: Objects and Props
  const user = {
    firstName: "Bob",
    lastName: "Dylan",
    favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
  };

  return (
    <div>
      {/* Exercise 1 */}
      <h2>Exercise 1: Working with JSX</h2>

      <p>Hello World!</p>

      {myElement}

      <p>React is {sum} times better with JSX</p>

      <hr />

      {/* Exercise 2 */}
      <h2>Exercise 2: Objects and Props</h2>

      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>

      <UserFavoriteAnimals favAnimals={user.favAnimals} />

      <hr />

      {/* Exercise 3 */}
      <h2>Exercise 3: HTML Tags in React</h2>

      <Exercise />

    </div>
  );
}

export default App;


