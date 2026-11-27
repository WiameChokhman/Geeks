
import { useState } from 'react';

function Events() {

  // Part I: Click Event
  const clickMe = () => {
    alert("I was clicked");
  };

  // Part II: Keyboard Event
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      alert("The Enter key was pressed, your input is: " +event.target.value);
    }
  };

  // Part III: Toggle State
  const [isToggleOn, setIsToggleOn] = useState(true);

  const toggle = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      <h2>Exercise 2: Events</h2>

      {/* Part I */}
      <button onClick={clickMe}>
        Click Me
      </button>

      <hr />

      {/* Part II */}
      <input
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="Press the ENTER key!"
      />

      <hr />

      {/* Part III */}
      <button onClick={toggle}>
        {isToggleOn ? "ON" : "OFF"}
      </button>

    </div>
  );
}

export default Events;

