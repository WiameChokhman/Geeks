
import "./Exercise.css";

function Exercise() {

  // Part 2: Inline Styling
  const styleHeader = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };

  // List of animals
  const animals = ["Horse", "Turtle", "Elephant", "Monkey"];

  return (
    <div>

      {/* Heading */}
      <h1 style={styleHeader}>Styled Header</h1>

      {/* Paragraph */}
      <p className="para">
        This is a styled paragraph in React.
      </p>

      {/* Link */}
      <a href="https://react.dev/" target="_blank" rel="noreferrer">
        Visit React
      </a>

      {/* Form */}
      <form>
        <input type="text" placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>

      {/* Image */}
      <img
        src="https://i.pinimg.com/originals/d0/9b/c5/d09bc5bbb0b5e956991d883adf5f736f.jpg"
        alt="Example"
        width="200"
        height="190"
      />

      {/* List generated with map() */}
      <ul>
        {animals.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>

    </div>
  );
}

export default Exercise;

